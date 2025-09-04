import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, MapPin, Shield, Zap, AlertCircle, Truck, BarChart3, Phone, Mail, Globe } from "lucide-react";
import InstallationRequestModal from "@/components/forms/InstallationRequestModal";

const NoorcomGpsTracker = () => {
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const pricingPlans = [
    {
      name: "Renewable Plan (Without Airtime)",
      price: "8,500",
      renewal: "KES 2,500 annually",
      idealFor: "Budget-conscious users",
      features: [
        "GPS tracking device",
        "1-year warranty", 
        "12 months tracking platform",
        "User loads airtime"
      ],
      popular: false
    },
    {
      name: "Renewable Plan (With Airtime)",
      price: "10,000",
      renewal: "KES 3,500 annually",
      idealFor: "Businesses & fleets",
      features: [
        "GPS tracking device",
        "1-year warranty",
        "12 months tracking platform", 
        "Airtime included"
      ],
      popular: true
    },
    {
      name: "One-Off Plan (Lifetime)",
      price: "13,500", 
      renewal: "No renewal required",
      idealFor: "Long-term users",
      features: [
        "GPS tracking device",
        "1-year warranty",
        "Lifetime tracking platform",
        "User loads airtime"
      ],
      popular: false
    }
  ];

  const keyFeatures = [
    {
      icon: MapPin,
      title: "Real-time GPS tracking",
      description: "Track via app & web portal"
    },
    {
      icon: AlertCircle,
      title: "SOS panic button", 
      description: "Emergency assistance"
    },
    {
      icon: Shield,
      title: "Remote engine cut-off",
      description: "Anti-theft protection"
    },
    {
      icon: BarChart3,
      title: "Reports & route playback",
      description: "Detailed analytics"
    },
    {
      icon: Zap,
      title: "Custom alerts",
      description: "Speeding, geo-fence breaches"
    },
    {
      icon: Truck,
      title: "Scalable solution",
      description: "Cars, trucks, heavy machinery"
    }
  ];

  const whyChoose = [
    "Reliable IoT-powered devices",
    "24/7 monitoring & customer support", 
    "Affordable plans tailored for Kenya",
    "Trusted by businesses & individuals alike"
  ];

  const handleRequestInstallation = (planName: string) => {
    setSelectedPlan(planName);
    setRequestModalOpen(true);
  };

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onRequestDemo={scrollToContact} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              🚗 Noorcom Fleet GPS Tracker
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secure. Track. Control.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Anytime, Anywhere.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Advanced GPS tracking solutions designed for the Kenyan market. Monitor your vehicles, 
              optimize routes, and ensure security with our reliable IoT-powered devices.
            </p>
            <Button size="lg" onClick={() => handleRequestInstallation("")} className="mr-4">
              Request Installation
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open('tel:+254722723362')}>
              Call +254 722 723 362
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-lg text-muted-foreground">
              Flexible pricing options to suit your tracking needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">KES {plan.price}</span>
                  </div>
                  <CardDescription className="text-sm font-medium text-primary">
                    {plan.renewal}
                  </CardDescription>
                  <CardDescription>
                    Ideal for: {plan.idealFor}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => handleRequestInstallation(plan.name)}
                  >
                    Request Installation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🔑 Key Features</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for comprehensive vehicle tracking
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Noorcom */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🌟 Why Choose Noorcom Fleet?</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {whyChoose.map((reason, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">📞 Contact Us Today!</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to secure your fleet? Get in touch with our team.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a href="https://www.noorcomfleet.co.ke" target="_blank" rel="noopener noreferrer" 
               className="flex items-center text-primary hover:text-primary/80">
              <Globe className="h-5 w-5 mr-2" />
              www.noorcomfleet.co.ke
            </a>
            <a href="tel:+254722723362" className="flex items-center text-primary hover:text-primary/80">
              <Phone className="h-5 w-5 mr-2" />
              +254 722 723 362
            </a>
            <a href="mailto:sales@noorcomfleet.co.ke" className="flex items-center text-primary hover:text-primary/80">
              <Mail className="h-5 w-5 mr-2" />
              sales@noorcomfleet.co.ke
            </a>
          </div>
          
          <Button size="lg" onClick={() => handleRequestInstallation("")}>
            Request Installation Now
          </Button>
        </div>
      </section>

      <Footer />
      
      <InstallationRequestModal 
        isOpen={requestModalOpen}
        onClose={() => setRequestModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
};

export default NoorcomGpsTracker;