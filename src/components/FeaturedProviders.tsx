
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, ThumbsUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data for featured providers
const providers = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    service: 'Plumbing',
    rating: 4.9,
    jobsCompleted: 120,
    location: 'New York, NY',
    verified: true,
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    service: 'Electrical',
    rating: 4.8,
    jobsCompleted: 98,
    location: 'Boston, MA',
    verified: true,
  },
  {
    id: 3,
    name: 'Robert Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    service: 'Cleaning',
    rating: 4.7,
    jobsCompleted: 215,
    location: 'Chicago, IL',
    verified: true,
  },
  {
    id: 4,
    name: 'Emily Davis',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    service: 'Handyman',
    rating: 4.9,
    jobsCompleted: 156,
    location: 'San Francisco, CA',
    verified: true,
  },
];

const FeaturedProviders: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Service Providers</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet our highly rated professionals ready to help with your home needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((provider) => (
            <Card key={provider.id} className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 relative">
                    <img 
                      src={provider.avatar} 
                      alt={provider.name} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
                    />
                    {provider.verified && (
                      <Badge className="absolute -bottom-2 -right-2 bg-green-500 text-xs px-2 py-1">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg">{provider.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{provider.service} Expert</p>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{provider.rating}</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <ThumbsUp className="h-4 w-4 text-primary" />
                    <span className="ml-1 text-sm">{provider.jobsCompleted} jobs</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-xs">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{provider.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
