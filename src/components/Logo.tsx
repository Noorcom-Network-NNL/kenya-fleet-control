
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <div className="font-bold text-2xl">
        <span className="text-red-600">NOOR</span>
        <span className="text-black">COM</span>
      </div>
      <div className="text-sm text-gray-600 font-medium">
        Fleet management
      </div>
    </div>
  );
};

export default Logo;
