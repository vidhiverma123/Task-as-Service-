
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-service-blue/10 to-service-teal/10 py-16 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">How HomeServe Works</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Experience our simple, effective process for connecting you with trusted service professionals
              </p>
            </div>
          </div>
        </div>
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
