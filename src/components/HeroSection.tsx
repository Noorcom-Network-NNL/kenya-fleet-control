
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  onGetDemo: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetDemo }) => {
  return (
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
              <Button 
                size="lg" 
                onClick={onGetDemo}
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
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
  );
};

export default HeroSection;
