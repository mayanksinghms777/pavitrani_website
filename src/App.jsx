import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import ProductModal from './components/ProductModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CollectionsPage from './pages/CollectionsPage';
import ShowroomPage from './pages/ShowroomPage';
import ContactPage from './pages/ContactPage';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [collectionFilter, setCollectionFilter] = useState(null);

  // Sync with URL hash for bookmarking and browser history back/forward support
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'collections', 'showroom', 'contact', 'disclaimer', 'privacy'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  // Update document title dynamically based on active page
  useEffect(() => {
    const titles = {
      home: "Pavitrani Jewellers Varanasi | Fine Gold, 925 Silver & Lab-Grown Diamonds",
      about: "About Us | Pavitrani Jewellers — A Unit of Mayank Metal Works",
      collections: "Jewellery Collections & Gallery | Pavitrani Jewellers Varanasi",
      showroom: "Virtual Showroom Tour | Pavitrani Jewellers B.L.W Road Varanasi",
      contact: "Contact Showroom & Location | Pavitrani Jewellers Varanasi",
      disclaimer: "Product & Pricing Disclaimer | Pavitrani Jewellers",
      privacy: "Privacy Policy | Pavitrani Jewellers Varanasi"
    };

    document.title = titles[activePage] || "Pavitrani Jewellers Varanasi";
  }, [activePage]);

  const handleOpenProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#30232E] font-sans antialiased selection:bg-[#C9A24A]/25 selection:text-[#44003B]">
      {/* Sticky Main Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full bg-[#FAF6EF]">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={setActivePage} 
            onSelectProduct={handleOpenProduct}
            setCollectionFilter={setCollectionFilter}
          />
        )}

        {activePage === 'about' && (
          <AboutPage 
            setActivePage={setActivePage} 
          />
        )}

        {activePage === 'collections' && (
          <CollectionsPage 
            onSelectProduct={handleOpenProduct}
            activeFilter={collectionFilter}
            setActiveFilter={setCollectionFilter}
          />
        )}

        {activePage === 'showroom' && (
          <ShowroomPage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}

        {activePage === 'disclaimer' && (
          <DisclaimerPage 
            setActivePage={setActivePage} 
          />
        )}

        {activePage === 'privacy' && (
          <PrivacyPolicyPage 
            setActivePage={setActivePage} 
          />
        )}
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseProduct} 
        />
      )}

      {/* Floating Sticky WhatsApp Button */}
      <WhatsAppFloating />

      {/* Mandatory Legal & Social Footer */}
      <Footer 
        setActivePage={setActivePage} 
        setCollectionFilter={setCollectionFilter}
      />
    </div>
  );
}
