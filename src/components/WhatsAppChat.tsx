
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppChat: React.FC = () => {
  const whatsappNumber = "254722723362";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap pr-2">
          Chat with us
        </span>
      </button>
    </div>
  );
};

export default WhatsAppChat;
