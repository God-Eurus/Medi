import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Video } from 'lucide-react';

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

  const navItems = [
    { label: 'Doctors', type: 'scroll', targetId: 'doctors' },
    { label: 'Hospitals', type: 'scroll', targetId: 'hospitals' },
    { label: 'Treatments', type: 'link', path: '/treatment' }, 
    { label: 'Wellness', type: 'link', path: '/wellness' },
  ];

  const handleNavClick = (item: any) => {
    setIsMenuOpen(false); 
    if (item.type === 'link') {
      navigate(item.path);
    } else if (item.type === 'scroll') {
      if (location.pathname !== '/') {
        navigate(`/#${item.targetId}`);
      } else {
        const element = document.getElementById(item.targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    // Outer Container
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2 lg:py-4' : 'py-3 lg:py-6'}`}>
      
      <header 
        className={`
          relative mx-auto transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          flex items-center justify-between
          
          /* Mobile/Tablet Styles */
          w-full px-4 sm:px-6 py-3 border-b border-[#1A3C34]/5
          bg-[#F2F0EA]/90 backdrop-blur-lg shadow-sm
          
          /* Desktop Styles (Floating Pill - only on Large screens) */
          lg:w-[90%] lg:max-w-7xl lg:rounded-full lg:px-8 lg:py-3 lg:border lg:shadow-xl
          lg:bg-[#F2F0EA]/60 lg:backdrop-blur-xl lg:border-[#1A3C34]/10 lg:shadow-[#1A3C34]/5
        `}
      >
        
        {/* 1. LOGO */}
        <Link to="/" className="flex items-center gap-2 group z-50 shrink-0" onClick={() => setIsMenuOpen(false)}>
          <img 
            src="/logo.png" 
            alt="MediVoyage Logo" 
            className="w-8 h-8 lg:w-6 lg:h-6 object-contain" 
          />
          <span 
            style={{ color: theme.primary, fontFamily: '"Playfair Display", serif' }}
            className="ml-1 text-lg lg:text-xl font-bold tracking-tight whitespace-nowrap"
          >
            MediVoyage
          </span>
        </Link>

        {/* 2. DESKTOP NAVIGATION (Hidden on Mobile & Tablet) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              style={{ color: theme.primary }}
              className="text-[11px] font-bold uppercase tracking-[0.15em] hover:text-[#C8B092] transition-colors relative group bg-transparent border-none cursor-pointer whitespace-nowrap"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#C8B092] rounded-full opacity-0 -translate-x-1/2 group-hover:opacity-100 transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* 3. RIGHT ACTIONS */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Desktop: Tele-Consult Button */}
          {/* <button
            onClick={() => navigate('/consultation')}
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-[#F2F0EA] transition-all duration-300 whitespace-nowrap"
          >
            <Video className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Tele-Consult</span>
          </button> */}

          {/* Desktop: Concierge Button */}
          <Link
            to="/myconcierge"
            className="hidden lg:flex group relative items-center gap-2 px-5 py-2 rounded-full bg-[#1A3C34] border border-[#C8B092]/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#C8B092]/20 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <div className="absolute inset-0 w-full h-full bg-[#C8B092] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-wider text-[#F2F0EA] group-hover:text-[#1A3C34] transition-colors duration-300">
               MV Concierge
            </span>
          </Link>

          {/* Mobile/Tablet: Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#1A3C34] hover:bg-[#1A3C34]/5 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* 4. MOBILE MENU DROPDOWN */}
        <div className={`
            lg:hidden absolute top-full left-0 w-full bg-[#F2F0EA] border-b border-gray-200 shadow-xl overflow-hidden transition-all duration-500 ease-in-out z-40
            ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <nav className="flex flex-col p-6 space-y-4">
            
            {/* Standard Nav Items */}
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                style={{ color: theme.primary }}
                className="text-left text-lg font-serif font-medium border-b border-[#1A3C34]/10 pb-3 bg-transparent hover:pl-2 transition-all"
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Actions Container */}
            <div className="pt-4 flex flex-col gap-3">
              {/* Mobile Tele-Consult */}
              {/* <button
                onClick={() => {
                  navigate('/consultation');
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-[#1A3C34] text-[#1A3C34] font-medium hover:bg-[#1A3C34]/5 transition-colors"
              >
                <Video className="w-5 h-5" />
                <span className="uppercase tracking-wider text-xs font-bold">Tele-Consult</span>
              </button> */}

              {/* Mobile Concierge */}
              <Link
                to="/myconcierge"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#1A3C34] text-[#C8B092] rounded-lg font-bold uppercase tracking-wider text-xs shadow-md"
              >
                MV Concierge 
              </Link>
            </div>
          </nav>
        </div>

      </header>
    </div>
  );
}