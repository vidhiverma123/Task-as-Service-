
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, MapPin, Clock, IndianRupee } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { servicesData } from '@/data/services';
import MapComponent from '@/components/MapComponent';

interface BookingFormValues {
  address: string;
  date: Date | undefined;
  time: string;
  notes: string;
  coordinates?: [number, number];
}

const BookService: React.FC = () => {
  const { serviceType, serviceId } = useParams<{ serviceType: string; serviceId: string }>();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState<[number, number] | undefined>(undefined);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<BookingFormValues>({
    defaultValues: {
      address: '',
      date: undefined,
      time: '',
      notes: '',
      coordinates: undefined,
    },
  });

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      localStorage.setItem('redirectAfterLogin', `/book/${serviceType}/${serviceId}`);
      navigate('/login');
      return;
    }

    // Find the selected service
    if (serviceType && serviceId && servicesData[serviceType as keyof typeof servicesData]) {
      const selectedService = servicesData[serviceType as keyof typeof servicesData].find(
        (s) => s.id === parseInt(serviceId)
      );
      if (selectedService) {
        setService(selectedService);
      } else {
        navigate('/services');
      }
    } else {
      navigate('/services');
    }
  }, [serviceType, serviceId, navigate]);

  // Handle location selection from map
  const handleLocationSelect = (coords: [number, number]) => {
    setCoordinates(coords);
    form.setValue('coordinates', coords);
  };

  const onSubmit = async (data: BookingFormValues) => {
    setLoading(true);
    
    try {
      // In a real app, this would be an API call to your backend
      // For now, we'll simulate a booking process
      console.log('Booking data:', {
        service,
        ...data,
        coordinates: coordinates, // Include the selected coordinates
        formattedDate: data.date ? format(data.date, 'PPP') : '',
        userId: JSON.parse(localStorage.getItem('user') || '{}').email,
      });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Booking confirmed!",
        description: "Redirecting to payment page...",
      });
      
      // Redirect to payment page with booking details
      setTimeout(() => {
        navigate('/payment-success');
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to book service. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p>Loading service details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Book {service.name}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Booking Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Address</FormLabel>
                            <FormControl>
                              <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                                <MapPin className="h-5 w-5 ml-3 text-gray-400" />
                                <Input 
                                  placeholder="Enter your full address" 
                                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0" 
                                  required
                                  {...field} 
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {/* Map Component */}
                      <div className="mb-6">
                        <FormLabel className="block mb-2">Select Location on Map</FormLabel>
                        <MapComponent 
                          address={form.watch('address')} 
                          onLocationSelect={handleLocationSelect} 
                        />
                        {coordinates && (
                          <p className="mt-2 text-sm text-gray-500">
                            Selected coordinates: {coordinates[1].toFixed(4)}, {coordinates[0].toFixed(4)}
                          </p>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Service Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className="w-full pl-3 text-left font-normal flex justify-between items-center"
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span className="text-gray-400">Select date</span>
                                      )}
                                      <CalendarIcon className="h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => date < new Date()}
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Time</FormLabel>
                              <FormControl>
                                <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                                  <Clock className="h-5 w-5 ml-3 text-gray-400" />
                                  <Input 
                                    type="time" 
                                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0" 
                                    required
                                    {...field} 
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Notes</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any specific instructions or requirements..." 
                                className="resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-service-blue to-service-teal hover:from-service-blue/90 hover:to-service-teal/90 text-white"
                        disabled={loading}
                      >
                        {loading ? "Processing..." : "Confirm & Proceed to Payment"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Service Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <p className="text-gray-500 text-sm">{service.duration}</p>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between mb-2">
                      <span>Service Fee</span>
                      <span className="font-medium flex items-center">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2 text-sm text-gray-500">
                      <span>Platform Fee</span>
                      <span>₹99</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-4 border-t mt-4">
                      <span>Total</span>
                      <span className="flex items-center">
                        <IndianRupee className="h-4 w-4 mr-1" />
                        {parseInt(service.price.replace(/[^0-9]/g, '')) + 99}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 px-6 py-4 text-sm text-gray-500">
                  <p className="text-center w-full">
                    Your booking is protected by our satisfaction guarantee
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookService;
