import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Wifi, Shield, Fuel, Camera, Truck, Car, MapPin } from 'lucide-react';
import fmb920Image from "@/assets/teltonika-fmb920.jpg";
import fmb125Image from "@/assets/teltonika-fmb125.jpg";
import fmb140Image from "@/assets/teltonika-fmb140.jpg";

const ProductsSection: React.FC = () => {
  const teltonikaTrackers = [
    {
      name: "Teltonika FMB920",
      subtitle: "Compact 2G Tracker",
      price: "KES 4,900",
      image: fmb920Image,
      features: [
        "2G GSM/GPRS connectivity",
        "Compact design (78 x 26.2 x 16 mm)",
        "Internal GNSS & GSM antennas", 
        "Digital inputs/outputs",
        "Built-in battery backup",
        "SMS/GPRS configuration",
        "Geofencing capabilities",
        "Real-time tracking"
      ],
      useCase: "Perfect for basic vehicle tracking and anti-theft protection",
      popular: false
    },
    {
      name: "Teltonika FMB125",
      subtitle: "Professional Vehicle Tracker",
      price: "KES 6,500", 
      image: fmb125Image,
      features: [
        "RS232/RS485 interfaces",
        "Advanced I/O capabilities",
        "Bluetooth connectivity",
        "Temperature monitoring",
        "Fuel level monitoring",
        "Driver behavior analysis",
        "Remote monitoring",
        "Fleet management ready"
      ],
      useCase: "Ideal for fleet management with advanced monitoring needs",
      popular: true
    },
    {
      name: "Teltonika FMB140",
      subtitle: "CAN Bus Advanced Tracker",
      price: "KES 13,500",
      image: fmb140Image,
      features: [
        "Integrated CAN bus reader",
        "Vehicle diagnostics data",
        "Fuel consumption monitoring",
        "Engine parameters tracking",
        "Mileage from odometer",
        "DTC fault codes",
        "Advanced fleet analytics",
        "Professional installation"
      ],
      useCase: "Enterprise-grade solution for comprehensive vehicle diagnostics",
      popular: false
    }
  ];

  const additionalProducts = [
    {
      icon: Car,
      name: "GPS Tracker with SIM Card",
      description: "Quality GPS/GPRS tracker with SimCard and Geo Fencing System, equipped with SOS anti-theft button",
      price: "From KES 15,000",
      category: "Basic Tracking"
    },
    {
      icon: Truck,
      name: "Speed Governor",
      description: "NTSA-approved speed governors that can be fitted in any vehicle for compliance and safety",
      price: "From KES 20,000", 
      category: "Safety & Compliance"
    },
    {
      icon: Fuel,
      name: "Fuel Monitoring System",
      description: "Quality fuel sensors to help you monitor fuel usage remotely and prevent fuel theft",
      price: "From KES 10,000",
      category: "Fuel Management"
    },
    {
      icon: Camera,
      name: "4G AI Dashcam",
      description: "NTSA Approved Driver Monitoring System with real-time streaming, dual camera recording, and AI features",
      price: "Contact for pricing",
      category: "AI & Safety"
    },
    {
      icon: Shield,
      name: "Vehicle Alarm System",
      description: "Complete vehicle security system with remote monitoring and instant alerts",
      price: "KES 4,500",
      category: "Security"
    },
    {
      icon: MapPin,
      name: "Fleet Management Software",
      description: "Comprehensive software solution for managing your entire fleet with reports and analytics",
      price: "Included with hardware",
      category: "Software"
    }
  ];

  return (
    <section id="products" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Product Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Professional GPS tracking devices and fleet management solutions
          </p>
        </div>

        {/* Teltonika Trackers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Teltonika GPS Trackers
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              Premium European-made tracking devices with advanced features
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {teltonikaTrackers.map((tracker, index) => (
              <Card key={index} className={`border-0 shadow-lg relative hover:shadow-xl transition-shadow ${tracker.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {tracker.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="mb-4">
                    <img 
                      src={tracker.image} 
                      alt={tracker.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold">{tracker.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-2">{tracker.subtitle}</CardDescription>
                  <p className="text-sm text-gray-500 mb-4">{tracker.useCase}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">{tracker.price}</span>
                    <span className="text-gray-600"> (one-time)</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-8">
                    {tracker.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tracker.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    onClick={() => {
                      const event = new CustomEvent('openSalesModal', { 
                        detail: { productName: tracker.name, source: 'products' } 
                      });
                      window.dispatchEvent(event);
                    }}
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Products */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Complete Fleet Solutions
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              Additional products and services to enhance your fleet management
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {additionalProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-bold">{product.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-blue-600">{product.price}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          const event = new CustomEvent('openSalesModal', { 
                            detail: { productName: product.name, source: 'products' } 
                          });
                          window.dispatchEvent(event);
                        }}
                      >
                        Enquire
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-lg p-6 sm:p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Custom Solutions?
          </h3>
          <p className="text-gray-600 mb-6">
            We offer customized fleet management solutions tailored to your specific business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                const event = new CustomEvent('openSalesModal', { 
                  detail: { source: 'products-cta' } 
                });
                window.dispatchEvent(event);
              }}
            >
              Request Quote
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                const event = new CustomEvent('openConsultationModal', { 
                  detail: { source: 'products-cta' } 
                });
                window.dispatchEvent(event);
              }}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;