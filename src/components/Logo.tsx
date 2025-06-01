
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`font-bold text-2xl ${className}`}>
      <span className="text-red-600">NOOR</span>
      <span className="text-black">COM</span>
    </div>
  );
};

export default Logo;
