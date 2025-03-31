
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-service-blue/10 to-service-teal/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Home Services, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-service-blue to-service-teal">
                Simplified
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              "Bringing Quality Services to Your Doorstep with Technology and Trust"
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button className="bg-gradient-to-r from-service-blue to-service-teal hover:from-service-blue/90 hover:to-service-teal/90 text-white px-8 py-6 h-auto text-lg">
                  Book a Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" className="px-8 py-6 h-auto text-lg">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Home Services Professional"
                className="rounded-lg shadow-xl object-cover w-full h-[400px]"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">1000+ Happy Customers</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
