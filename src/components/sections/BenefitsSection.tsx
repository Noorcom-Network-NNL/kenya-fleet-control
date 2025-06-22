
import React from 'react';
import { Check } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    "Reduce fuel costs by up to 25%",
    "Improve vehicle utilization by 30%",
    "Decrease maintenance costs by 20%",
    "Enhance driver safety and compliance",
    "Real-time visibility of entire fleet",
    "Automated reporting and analytics"
  ];

  return (
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
  );
};

export default BenefitsSection;
