
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, BarChart3, Bot } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'AI Service Matching',
    description: 'Our AI matches you with the best professional based on your needs, location, and their expertise.',
    icon: BrainCircuit,
    color: 'blue'
  },
  {
    id: 2,
    title: 'Dynamic Pricing',
    description: 'Get fair, transparent pricing that adjusts based on service complexity, demand, and location.',
    icon: BarChart3,
    color: 'indigo'
  },
  {
    id: 3,
    title: 'AI Chat Support',
    description: '24/7 AI-powered chat support to answer questions and help with bookings anytime.',
    icon: Bot,
    color: 'teal'
  }
];

const AIFeatures: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">POWERED BY AI</span>
          <h2 className="text-3xl font-bold mb-4">Intelligent Service Platform</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our AI technology ensures you get the best service experience possible
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="bg-white dark:bg-gray-800 overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow h-full">
              <div className={`h-2 bg-service-${feature.color}`}></div>
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-md bg-service-${feature.color}/10 flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 text-service-${feature.color}`} />
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
