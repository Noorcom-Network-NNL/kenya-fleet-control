import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import ProductsSection from "@/components/sections/ProductsSection";
import Footer from "@/components/Footer";
import SalesModal from "@/components/forms/SalesModal";
import ConsultationModal from "@/components/forms/ConsultationModal";

const Products = () => {
  const [salesModalOpen, setSalesModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>({});

  const scrollToContact = () => {
    window.location.href = '/#contact';
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
      <ProductsSection />
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

export default Products;