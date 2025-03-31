
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, NY',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    rating: 5,
    text: 'I needed an emergency plumber and HomeServe connected me with a professional within 30 minutes. The service was excellent and fairly priced!',
    service: 'Plumbing'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 5,
    text: 'The AI matching really works! I got paired with a cleaner who specialized exactly in what I needed. Will definitely use again.',
    service: 'Cleaning'
  },
  {
    id: 3,
    name: 'Jennifer Lopez',
    location: 'Miami, FL',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 4,
    text: 'Being able to track my electrician on the map made the whole experience so convenient. No more waiting around all day!',
    service: 'Electrical'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white dark:bg-gray-800 overflow-hidden border shadow-md hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {Array(5).fill(null).map((_, index) => (
                    <Star 
                      key={index} 
                      className={`h-4 w-4 ${index < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
                
                <div className="mt-auto">
                  <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                    {testimonial.service} Service
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
