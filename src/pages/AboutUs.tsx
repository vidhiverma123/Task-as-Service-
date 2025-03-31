
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, Users, Calendar, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-service-blue/10 to-service-teal/10 py-16 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">About HomeServe</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                "Bringing Quality Services to Your Doorstep with Technology and Trust"
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-12 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At HomeServe, we're revolutionizing how homeowners connect with service providers. Our platform uses cutting-edge technology to ensure you get the best professionals for your home service needs.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardContent className="flex items-center p-4">
                      <Users className="h-5 w-5 mr-2 text-service-blue" />
                      <span>1000+ Verified Providers</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-center p-4">
                      <Calendar className="h-5 w-5 mr-2 text-service-teal" />
                      <span>Quick Service Booking</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-center p-4">
                      <Award className="h-5 w-5 mr-2 text-service-blue" />
                      <span>Quality Guaranteed</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-center p-4">
                      <MapPin className="h-5 w-5 mr-2 text-service-teal" />
                      <span>Pan-India Coverage</span>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-service-blue mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600 dark:text-gray-300">NIT Sikkim, CSE Department</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-service-blue mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">support@homeserve.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-service-blue mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600 dark:text-gray-300">+91 7850092438</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="font-semibold">Technical Contact</p>
                    <p className="text-gray-600 dark:text-gray-300">Vishi Verma</p>
                    <p className="text-gray-600 dark:text-gray-300">NIT Sikkim, CSE Department</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
