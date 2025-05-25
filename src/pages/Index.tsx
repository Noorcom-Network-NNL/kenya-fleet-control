import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Truck, MapPin, Fuel, Users, Shield, TrendingUp, Check, Star, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    fleetSize: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted!",
      description: "Our team will contact you within 24 hours to schedule your personalized demo.",
    });
    setFormData({ name: '', email: '', company: '', phone: '', fleetSize: '', message: '' });
  };

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

  const benefits = [
    "Reduce fuel costs by up to 25%",
    "Improve vehicle utilization by 30%",
    "Decrease maintenance costs by 20%",
    "Enhance driver safety and compliance",
    "Real-time visibility of entire fleet",
    "Automated reporting and analytics"
  ];

  const testimonials = [
    {
      name: "James Mwangi",
      company: "Nairobi Express Logistics",
      text: "NFMS has transformed our operations. We've reduced fuel costs by 23% and improved our delivery times significantly.",
      rating: 5
    },
    {
      name: "Sarah Kiprotich",
      company: "Highland Transport SACCO",
      text: "The system is user-friendly and the support team is excellent. Our drivers love the mobile app interface.",
      rating: 5
    },
    {
      name: "Peter Kamau",
      company: "Metro Construction Ltd",
      text: "Best investment we've made. The maintenance alerts alone have saved us thousands in repair costs.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      vehicles: "1-5 Vehicles",
      price: "KES 3,000",
      period: "per month",
      features: [
        "GPS tracking",
        "Basic fuel logging",
        "Driver management",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Standard",
      vehicles: "6-20 Vehicles",
      price: "KES 10,000",
      period: "per month",
      features: [
        "All Basic features",
        "Advanced analytics",
        "Maintenance scheduling",
        "Geofencing alerts",
        "Phone support",
        "Custom reports"
      ],
      popular: true
    },
    {
      name: "Pro",
      vehicles: "21+ Vehicles",
      price: "Custom",
      period: "pricing",
      features: [
        "All Standard features",
        "API integrations",
        "Dedicated support",
        "Custom development",
        "On-site training",
        "24/7 monitoring"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/b6ff6456-99bc-4d08-904e-8266015602ef.png" 
                alt="Noorcom - Precision in Motion" 
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700">
              Request Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                🇰🇪 Made for Kenyan Businesses
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Transform Your Fleet Management
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Complete fleet management solution with real-time tracking, fuel monitoring, and driver management. 
                Built specifically for Kenyan transport and logistics companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  View Features
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Fleet Overview</span>
                    <Badge className="bg-green-500">Live</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="text-blue-100 text-sm">Active Vehicles</p>
                      <p className="text-2xl font-bold">147</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="text-blue-100 text-sm">Fuel Saved</p>
                      <p className="text-2xl font-bold">25%</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {["KBY 123A - Nairobi to Mombasa", "KCA 456B - CBD Route", "KAB 012D - Thika Highway"].map((route, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-blue-100">{route}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Fleet Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your fleet efficiently, reduce costs, and improve operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Proven Results for Kenyan Businesses
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join over 500+ businesses across Kenya who have transformed their fleet operations with NFMS.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ROI Calculator</h3>
                <p className="text-gray-600">See your potential savings</p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-600">Monthly Fuel Savings</p>
                    <p className="text-2xl font-bold text-green-600">KES 150K</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-600">Maintenance Savings</p>
                    <p className="text-2xl font-bold text-blue-600">KES 80K</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Total Annual Savings</p>
                  <p className="text-3xl font-bold text-purple-600">KES 2.7M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Kenyan Companies
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers say about their experience with NFMS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
                  <CardDescription className="text-gray-600">{plan.vehicles}</CardDescription>
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
                    {plan.name === "Pro" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Fleet?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get a personalized demo and see how NFMS can optimize your fleet operations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-blue-100">+254 700 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-blue-100">info@noorcom.co.ke</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-blue-100">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Request a Free Demo</CardTitle>
                <CardDescription>Fill out the form and we'll contact you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <Input
                    placeholder="Fleet Size (Number of Vehicles)"
                    value={formData.fleetSize}
                    onChange={(e) => setFormData({...formData, fleetSize: e.target.value})}
                    required
                  />
                  <Textarea
                    placeholder="Tell us about your fleet management needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700">
                    Request Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/b6ff6456-99bc-4d08-904e-8266015602ef.png" 
                  alt="Noorcom - Precision in Motion" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Leading fleet management solutions for Kenyan businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Noorcom Fleet Management Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
