
import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

interface HeaderProps {
  onRequestDemo: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRequestDemo }) => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <Button 
            onClick={onRequestDemo}
            className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
