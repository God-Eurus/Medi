import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
// Assuming this has Doctors/Partners
import Hospitalspages from '../components/Hospitalspages';
import Treatment from '../components/Treatment';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HomePage() {
  const location = useLocation();

  // Scroll to section if URL has a hash (e.g., /#doctors)
  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services */}
        

        {/* 3. About Us */}
        <div id="about">
          <About />
        </div>

       <div id="services">
          <Services />
        </div>
        
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}