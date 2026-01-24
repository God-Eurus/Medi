import React, { useState, useEffect } from 'react';
import { Calendar, Phone } from 'lucide-react';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button only after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Container - Flex Row for Split Layout */}
      <div className="flex h-16 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        
        {/* BUTTON 1: CALL NOW (White Background) */}
        {/* Replace the href with your actual phone number */}
        <a 
          href="tel:+919799636757" 
          className="flex-1 bg-white text-[#0F2622] font-['Montserrat'] font-bold text-sm flex items-center justify-center gap-2 border-t border-gray-200 active:bg-gray-50 transition-colors"
        >
          <Phone size={18} className="text-[#0F2622]" />
          <span className="uppercase tracking-wider">Call Now</span>
        </a>

        {/* BUTTON 2: GET QUOTE (Emerald Background) */}
        <button 
          onClick={scrollToTop}
          className="flex-1 bg-[#0F2622] text-white font-['Montserrat'] font-bold text-sm flex items-center justify-center gap-2 active:bg-[#0F2622]/90 transition-colors"
        >
          <Calendar size={18} className="text-[#D4C5A9]" />
          <span className="uppercase tracking-wider">Get Quote</span>
        </button>

      </div>
      
      {/* iPhone Safe Area Spacer */}
      <div className="h-safe-bottom bg-white lg:bg-transparent"></div>
    </div>
  );
}