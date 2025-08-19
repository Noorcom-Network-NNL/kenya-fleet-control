
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Fuel, Users, Shield, TrendingUp, Clock } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-Time GPS Tracking",
      description: "Track your entire fleet in real-time with precise location data and route optimization."
    },
    {
      icon: Fuel,
      title: "Fuel Management",
      description: "Monitor fuel consumption, detect theft, and optimize fuel efficiency across your fleet."
    },
    {
      icon: Users,
      title: "Driver Management",
      description: "Track driver performance, NTSA license validation, and safety compliance."
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "NTSA, KRA integration with secure data protection and regulatory compliance."
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reports",
      description: "Comprehensive reports and data analytics to optimize your fleet operations."
    },
    {
      icon: Clock,
      title: "Maintenance Alerts",
      description: "Proactive maintenance scheduling to prevent breakdowns and reduce costs."
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Fleet Management Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your fleet efficiently, reduce costs, and improve operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
