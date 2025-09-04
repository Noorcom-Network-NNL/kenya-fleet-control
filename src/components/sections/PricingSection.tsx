
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
      popular: false,
      category: "subscription"
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
      popular: true,
      category: "subscription"
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
      popular: false,
      category: "subscription"
    }
  ];

  const noorcomPlans = [
    {
      name: "Renewable Plan",
      subtitle: "Without Airtime",
      price: "KES 8,500",
      period: "one-time",
      renewal: "KES 2,500 annually",
      target: "Budget-conscious users",
      features: [
        "GPS tracking device",
        "1-year warranty",
        "12 months tracking platform",
        "User loads airtime",
        "Real-time GPS tracking",
        "SOS panic button",
        "Remote engine cut-off"
      ],
      popular: false,
      category: "noorcom"
    },
    {
      name: "Renewable Plan",
      subtitle: "With Airtime",
      price: "KES 10,000",
      period: "one-time",
      renewal: "KES 3,500 annually",
      target: "Businesses & fleets",
      features: [
        "GPS tracking device",
        "1-year warranty",
        "12 months tracking platform",
        "Airtime included",
        "Real-time GPS tracking",
        "SOS panic button",
        "Custom alerts & reports"
      ],
      popular: true,
      category: "noorcom"
    },
    {
      name: "One-Off Plan",
      subtitle: "Lifetime",
      price: "KES 13,500",
      period: "one-time",
      renewal: "No renewal required",
      target: "Long-term users",
      features: [
        "GPS tracking device",
        "1-year warranty",
        "Lifetime tracking platform",
        "User loads airtime",
        "Real-time GPS tracking",
        "Route playback & reports",
        "Scalable for all vehicles"
      ],
      popular: false,
      category: "noorcom"
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Choose the plan that fits your fleet size and needs
          </p>
        </div>
        
        {/* Subscription Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Fleet Management Subscriptions</h3>
            <p className="text-gray-600">Monthly plans with comprehensive fleet management features</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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
                    onClick={() => {
                      const event = new CustomEvent('openSalesModal', { 
                        detail: { planName: plan.name, source: 'pricing' } 
                      });
                      window.dispatchEvent(event);
                    }}
                  >
                    {plan.subtitle === "Supreme Plan" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Noorcom GPS Tracker Plans */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">🚗 Noorcom Fleet GPS Tracker</h3>
            <p className="text-gray-600">Secure. Track. Control. Anytime, Anywhere.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {noorcomPlans.map((plan, index) => (
              <Card key={index} className={`border-0 shadow-lg relative ${plan.popular ? 'ring-2 ring-green-600' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-2">{plan.subtitle}</CardDescription>
                  <p className="text-sm text-gray-500 mb-4">Ideal for: {plan.target}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600"> {plan.period}</span>
                  </div>
                  {plan.renewal && (
                    <p className="text-sm text-orange-600 mt-2">Renewal: {plan.renewal}</p>
                  )}
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
                    className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    onClick={() => {
                      window.open('/noorcom-gps-tracker', '_blank');
                    }}
                  >
                    View Details & Order
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
