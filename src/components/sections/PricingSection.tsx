
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      name: "Essential Tracking",
      subtitle: "Basic Plan",
      price: "KES 3,500",
      period: "per month",
      target: "Startups and small fleet owners looking for simple tracking",
      features: [
        "GPS Tracking",
        "Basic Fuel Logging",
        "Driver Management",
        "Mobile App Access",
        "Email Notifications",
        "Free Installation",
        "1 Year Free Software"
      ],
      popular: false
    },
    {
      name: "Advanced Tracking",
      subtitle: "Standard Plan", 
      price: "KES 5,500",
      period: "per month",
      target: "Medium-sized fleets needing more analytics and proactive maintenance",
      features: [
        "All Basic Plan Features",
        "Advanced Analytics (Reports & Insights)",
        "Maintenance Scheduling (Alerts on vehicle servicing needs)",
        "Geofencing & Alerts (Notifications for critical events)",
        "Phone Support",
        "Custom Reports",
        "Real-time Notifications"
      ],
      popular: true
    },
    {
      name: "Premium Tracking & API Integration",
      subtitle: "Supreme Plan",
      price: "KES 10,500",
      period: "per month",
      target: "Large fleets, corporates, and enterprises needing API integration",
      features: [
        "All Standard Plan Features",
        "API Integrations (Integrate with client ERP or 3rd party apps)",
        "Dedicated Support Engineer",
        "Operation Center Setup (Optional)",
        "24/7 Monitoring",
        "Custom Development",
        "On-site Training"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your fleet size and needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`border-0 shadow-lg relative ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-2">{plan.subtitle}</CardDescription>
                <p className="text-sm text-gray-500 mb-4">{plan.target}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                >
                  {plan.subtitle === "Supreme Plan" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
