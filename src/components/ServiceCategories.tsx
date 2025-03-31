
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Wrench, Droplet, Zap, Hammer, Brush, Home } from 'lucide-react';

const services = [
  { id: 1, name: 'Plumbing', icon: Droplet, color: 'blue', description: 'Fix leaks, installations, and repairs' },
  { id: 2, name: 'Electrical', icon: Zap, color: 'indigo', description: 'Wiring, fixtures, and electrical repairs' },
  { id: 3, name: 'Cleaning', icon: Brush, color: 'teal', description: 'Home cleaning and sanitization services' },
  { id: 4, name: 'Carpentry', icon: Hammer, color: 'purple', description: 'Furniture assembly and wood work' },
  { id: 5, name: 'Handyman', icon: Wrench, color: 'orange', description: 'General repairs and maintenance' },
  { id: 6, name: 'Home Decor', icon: Home, color: 'green', description: 'Interior design and decoration' },
];

const ServiceCategories: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse through our comprehensive range of professional home services
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link to={`/services/${service.name.toLowerCase()}`} key={service.id}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`mb-4 p-4 rounded-full bg-service-${service.color}/10 group-hover:bg-service-${service.color}/20 transition-colors`}>
                    <service.icon className={`h-8 w-8 text-service-${service.color}`} />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-service-blue transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
