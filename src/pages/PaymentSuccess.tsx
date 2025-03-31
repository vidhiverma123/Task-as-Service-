
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, Calendar } from 'lucide-react';

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // In a real app, we would verify the payment status from the server
    // For now, we'll just check if the user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">
              Your booking has been confirmed. Thank you for choosing HomeServe.
            </p>
            <div className="bg-gray-50 w-full p-4 rounded-md mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Transaction ID</span>
                <span className="font-medium">HS-{Math.floor(Math.random() * 1000000)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Amount Paid</span>
                <span className="font-medium">₹{Math.floor(Math.random() * 2000) + 500}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Payment Method</span>
                <span className="font-medium">RazorPay</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button 
                variant="outline" 
                className="flex-1 gap-2"
                onClick={() => navigate('/')}
              >
                <Home className="h-4 w-4" />
                <span>Go Home</span>
              </Button>
              <Button 
                className="flex-1 gap-2 bg-gradient-to-r from-service-blue to-service-teal"
                onClick={() => navigate('/bookings')}
              >
                <Calendar className="h-4 w-4" />
                <span>View Bookings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
