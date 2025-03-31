
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, useNavigate } from 'react-router-dom';
import { Droplet, Zap, Brush, Hammer, Wrench, Home, ArrowRight, IndianRupee } from 'lucide-react';

// Mock data for services with Indian Rupee pricing
const serviceCategories = [
  { id: 'plumbing', name: 'Plumbing', icon: Droplet, color: 'blue' },
  { id: 'electrical', name: 'Electrical', icon: Zap, color: 'indigo' },
  { id: 'cleaning', name: 'Cleaning', icon: Brush, color: 'teal' },
  { id: 'carpentry', name: 'Carpentry', icon: Hammer, color: 'purple' },
  { id: 'handyman', name: 'Handyman', icon: Wrench, color: 'orange' },
  { id: 'homeDecor', name: 'Home Decor', icon: Home, color: 'green' },
];

const servicesData = {
  plumbing: [
    { id: 1, name: 'Pipe Repair', price: '₹600-900', duration: '1-2 hours' },
    { id: 2, name: 'Drain Cleaning', price: '₹450-750', duration: '1 hour' },
    { id: 3, name: 'Faucet Installation', price: '₹520-680', duration: '1 hour' },
    { id: 4, name: 'Water Heater Repair', price: '₹900-1500', duration: '2-3 hours' },
    { id: 5, name: 'Toilet Installation', price: '₹1100-1900', duration: '2-3 hours' },
    { id: 6, name: 'Leak Detection', price: '₹750-1120', duration: '1-2 hours' },
  ],
  electrical: [
    { id: 1, name: 'Light Fixture Installation', price: '₹450-900', duration: '1 hour' },
    { id: 2, name: 'Outlet Repair', price: '₹520-750', duration: '1 hour' },
    { id: 3, name: 'Circuit Breaker Service', price: '₹750-1120', duration: '1-2 hours' },
    { id: 4, name: 'Ceiling Fan Installation', price: '₹600-900', duration: '1-2 hours' },
    { id: 5, name: 'Electrical Panel Upgrade', price: '₹7500-15000', duration: '4-8 hours' },
    { id: 6, name: 'Wiring Installation', price: '₹1500-3000', duration: '2-4 hours' },
  ],
  cleaning: [
    { id: 1, name: 'Regular Home Cleaning', price: '₹600-1120', duration: '2-3 hours' },
    { id: 2, name: 'Deep Cleaning', price: '₹1120-2250', duration: '4-6 hours' },
    { id: 3, name: 'Move In/Out Cleaning', price: '₹1500-3000', duration: '5-8 hours' },
    { id: 4, name: 'Carpet Cleaning', price: '₹750-1500', duration: '2-4 hours' },
    { id: 5, name: 'Window Cleaning', price: '₹600-1200', duration: '2-4 hours' },
    { id: 6, name: 'Post Construction Cleaning', price: '₹1900-3750', duration: '5-8 hours' },
  ],
  carpentry: [
    { id: 1, name: 'Furniture Assembly', price: '₹450-900', duration: '1-3 hours' },
    { id: 2, name: 'Cabinet Installation', price: '₹1500-3750', duration: '3-6 hours' },
    { id: 3, name: 'Door Repair/Installation', price: '₹1120-2250', duration: '2-4 hours' },
    { id: 4, name: 'Custom Shelving', price: '₹1500-3000', duration: '3-5 hours' },
    { id: 5, name: 'Deck Repair', price: '₹2250-6000', duration: '4-8 hours' },
    { id: 6, name: 'Trim/Molding Installation', price: '₹1500-3000', duration: '3-6 hours' },
  ],
  handyman: [
    { id: 1, name: 'TV Mounting', price: '₹520-900', duration: '1-2 hours' },
    { id: 2, name: 'Drywall Repair', price: '₹750-1500', duration: '2-3 hours' },
    { id: 3, name: 'Painting Services', price: '₹1500-3750', duration: '4-8 hours' },
    { id: 4, name: 'Fence Repair', price: '₹1120-2250', duration: '2-4 hours' },
    { id: 5, name: 'Gutter Cleaning', price: '₹750-1500', duration: '2-3 hours' },
    { id: 6, name: 'Flooring Repair', price: '₹1120-2250', duration: '2-4 hours' },
  ],
  homeDecor: [
    { id: 1, name: 'Interior Design Consultation', price: '₹750-1500', duration: '1-2 hours' },
    { id: 2, name: 'Wallpaper Installation', price: '₹2250-4500', duration: '4-8 hours' },
    { id: 3, name: 'Curtain/Blind Installation', price: '₹750-1500', duration: '2-3 hours' },
    { id: 4, name: 'Home Staging', price: '₹3000-6000', duration: '4-8 hours' },
    { id: 5, name: 'Art/Mirror Hanging', price: '₹600-1120', duration: '1-3 hours' },
    { id: 6, name: 'Room Makeover', price: '₹3750-11250', duration: '1-3 days' },
  ],
};

const Services: React.FC = () => {
  const navigate = useNavigate();
  
  const handleBooking = (serviceType: string, serviceId: number) => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('user');
    if (!isLoggedIn) {
      // Redirect to login page with return URL
      localStorage.setItem('redirectAfterLogin', `/book/${serviceType}/${serviceId}`);
      navigate('/login');
      return;
    }
    
    // If logged in, proceed to booking
    navigate(`/book/${serviceType}/${serviceId}`);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-service-blue/10 to-service-teal/10 py-16 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Our Services</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Browse and book from our comprehensive range of professional home services, all backed by our satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
        
        <div className="py-12 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto">
            <Tabs defaultValue="plumbing" className="w-full">
              <TabsList className="mb-8 flex flex-wrap justify-start gap-2">
                {serviceCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                    <category.icon className={`h-4 w-4 mr-2 text-service-${category.color}`} />
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(servicesData).map(([key, services]) => (
                <TabsContent key={key} value={key} className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                      <Card key={service.id} className="hover:shadow-lg transition-shadow h-full">
                        <CardContent className="p-6 flex flex-col h-full">
                          <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                          <div className="flex items-center mb-4">
                            <span className="text-primary font-medium text-lg flex items-center">
                              {service.price}
                            </span>
                            <span className="mx-2 text-gray-300">|</span>
                            <span className="text-gray-500 text-sm">{service.duration}</span>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                            Professional service with guaranteed satisfaction
                          </p>
                          <div className="mt-auto">
                            <Button 
                              className="w-full bg-gradient-to-r from-service-blue to-service-teal hover:from-service-blue/90 hover:to-service-teal/90 text-white"
                              onClick={() => handleBooking(key, service.id)}
                            >
                              Book Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
