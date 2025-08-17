
import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import SalesModal from "@/components/forms/SalesModal";
import ConsultationModal from "@/components/forms/ConsultationModal";

const Index = () => {
  const [salesModalOpen, setSalesModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>({});

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleOpenSalesModal = (event: any) => {
      setModalData(event.detail);
      setSalesModalOpen(true);
    };

    const handleOpenConsultationModal = (event: any) => {
      setModalData(event.detail);
      setConsultationModalOpen(true);
    };

    window.addEventListener('openSalesModal', handleOpenSalesModal);
    window.addEventListener('openConsultationModal', handleOpenConsultationModal);

    return () => {
      window.removeEventListener('openSalesModal', handleOpenSalesModal);
      window.removeEventListener('openConsultationModal', handleOpenConsultationModal);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header onRequestDemo={scrollToContact} />
      <HeroSection onGetDemo={scrollToContact} />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      
      <SalesModal 
        isOpen={salesModalOpen}
        onClose={() => setSalesModalOpen(false)}
        source={modalData.source}
        productName={modalData.productName}
        planName={modalData.planName}
      />
      
      <ConsultationModal 
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        source={modalData.source}
      />
    </div>
  );
};

export default Index;
