import React from 'react';
import Header from "@/components/Header";
import ProductsSection from "@/components/sections/ProductsSection";
import Footer from "@/components/Footer";

const Products = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onRequestDemo={scrollToContact} />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Products;