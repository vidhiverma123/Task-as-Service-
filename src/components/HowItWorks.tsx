
import React from 'react';
import { Search, Calendar, MapPin, CreditCard } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Select a Service',
    description: 'Browse and choose from our wide range of professional home services',
    icon: Search,
    color: 'blue'
  },
  {
    id: 2,
    title: 'Book an Appointment',
    description: 'Select your preferred date and time for the service',
    icon: Calendar,
    color: 'indigo'
  },
  {
    id: 3,
    title: 'Track Your Provider',
    description: 'Track your service provider in real-time on the map',
    icon: MapPin,
    color: 'teal'
  },
  {
    id: 4,
    title: 'Secure Payment',
    description: 'Pay securely through our platform after service completion',
    icon: CreditCard,
    color: 'purple'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Book a service in just four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-full bg-service-${step.color}/10 flex items-center justify-center`}>
                  <step.icon className={`h-8 w-8 text-service-${step.color}`} />
                </div>
                <div className="absolute top-1/2 left-full w-full h-1 bg-gray-200 -z-10 hidden lg:block"></div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm w-full">
                <h3 className="font-semibold text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
