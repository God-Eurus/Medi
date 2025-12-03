import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onChatToggle?: () => void;
}

export default function Header({ onChatToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Colors
  const theme = {
    primary: '#1A3C34',     // Deep Cypress Green
    secondary: '#C8B092',   // Gold/Sand
    bg: '#F2F0EA',          // Alabaster
  };

  // ✅ Updated Navigation Items Logic
  const navItems = [
    // SCROLL LINKS (Stay on Home)
    { label: 'Doctors', type: 'scroll', targetId: 'doctors' },
    { label: 'Hospitals', type: 'scroll', targetId: 'hospitals' },
    
    // PAGE LINKS (New Route)
    { label: 'Treatments', type: 'link', path: '/treatment' }, // Ensure this matches your route in App.tsx
    { label: 'Wellness', type: 'link', path: '/wellness' },
  ];

  // ✅ Custom Navigation Handler
  const handleNavClick = (item: any) => {
    setIsMenuOpen(false); // Close mobile menu

    if (item.type === 'link') {
      // Direct Navigation to new page
      navigate(item.path);
    } else if (item.type === 'scroll') {
      // Scroll Logic
      if (location.pathname !== '/') {
        // If not on home, go to home with hash
        navigate(`/#${item.targetId}`);
      } else {
        // If already on home, just scroll smoothly
        const element = document.getElementById(item.targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    // Outer Container
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-6'}`}>
      
      <header 
        className={`
          relative mx-auto transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          flex items-center justify-between
          
          /* Mobile Styles */
          w-full px-6 py-4 border-b border-[#1A3C34]/5
          bg-[#F2F0EA]/85 backdrop-blur-lg
          
          /* Desktop Styles (Floating Pill) */
          md:w-[90%] md:max-w-6xl md:rounded-full md:px-8 md:py-3 md:border md:shadow-xl
          
          /* Desktop Transparency (60%) */
          md:bg-[#F2F0EA]/60 md:backdrop-blur-xl md:border-[#1A3C34]/10 md:shadow-[#1A3C34]/5
        `}
      >
        
        {/* 1. LOGO */}
        <Link to="/" className="flex items-center gap-2 group z-50 shrink-0">
          <img 
            src="/logo.png" 
            alt="MediVoyage Logo" 
            className="w-5 h-5 object-contain" 
          />
          <span 
            style={{ color: theme.primary, fontFamily: '"Playfair Display", serif' }}
            className="ml-1 text-xl font-bold tracking-tight"
          >
            MediVoyage
          </span>
        </Link>

        {/* 2. DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              style={{ color: theme.primary }}
              className="text-[11px] font-bold uppercase tracking-[0.15em] hover:text-[#C8B092] transition-colors relative group bg-transparent border-none cursor-pointer"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#C8B092] rounded-full opacity-0 -translate-x-1/2 group-hover:opacity-100 transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* 3. RIGHT ACTIONS */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          
          {/* Concierge Button (Link to Page) */}
          <Link
            to="/myconcierge"
            className="hidden md:flex group relative items-center gap-2 px-5 py-2 rounded-full bg-[#1A3C34] border border-[#C8B092]/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#C8B092]/20 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 w-full h-full bg-[#C8B092] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-wider text-[#F2F0EA] group-hover:text-[#1A3C34] transition-colors duration-300">
               MV Concierge
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-1 text-[#1A3C34]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* 4. MOBILE MENU */}
        <div className={`
            md:hidden absolute top-full left-0 w-full bg-[#F2F0EA]/95 backdrop-blur-xl border-b border-gray-200 shadow-xl overflow-hidden transition-all duration-500 ease-in-out
            ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                style={{ color: theme.primary }}
                className="text-left text-lg font-serif font-medium border-b border-[#1A3C34]/10 pb-2 bg-transparent"
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Concierge Link */}
            <Link
              to="/myconcierge"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-[#1A3C34] text-[#C8B092] rounded-lg font-bold uppercase tracking-wider text-sm"
            >
              MV Concierge 
            </Link>
          </nav>
        </div>

      </header>
    </div>
  );
}