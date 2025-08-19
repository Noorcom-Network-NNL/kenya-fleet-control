
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onRequestDemo: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRequestDemo }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            {isHomePage && <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>}
            <Link to="/products" className="text-gray-600 hover:text-blue-600 transition-colors">Products</Link>
            {isHomePage && <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>}
            {isHomePage ? (
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            ) : (
              <Link to="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            )}
          </nav>

          {/* Desktop CTA Button */}
          <Button 
            onClick={onRequestDemo}
            className="hidden md:flex bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
          >
            Request Demo
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {isHomePage && (
                <a 
                  href="#features" 
                  className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
              )}
              <Link 
                to="/products" 
                className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              {isHomePage && (
                <a 
                  href="#pricing" 
                  className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
              )}
              {isHomePage ? (
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              ) : (
                <Link 
                  to="/#contact" 
                  className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              )}
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => {
                    onRequestDemo();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
                >
                  Request Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
