import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, User } from 'lucide-react';

export default function Footer() {
  // Theme Colors
  const theme = {
    cream: '#ECE3CE',
    sage: '#739072',
    moss: '#4F6F52',
    dark: '#3A4D39',
    darker: '#2F3E2F' // Slightly darker shade for the top bar
  };

  return (
    <footer style={{ backgroundColor: theme.dark, color: theme.cream }} className="font-sans border-t border-[#4F6F52]/30">
      
      {/* =========================================
          GRIEVANCE OFFICER - TOP BAR (Full Width)
      ========================================= */}
      <div 
        style={{ backgroundColor: theme.darker }} 
        className="w-full py-4 border-b border-[#4F6F52]/30"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-sm">
            <span style={{ color: theme.sage }} className="uppercase tracking-widest font-bold text-xs">
              For Grievances Contact:
            </span>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 font-bold">
              <div className="flex items-center gap-2">
                <User size={16} style={{ color: theme.sage }} />
                <span>Dr. Garvit Maharwal</span>
              </div>
              
              <div className="hidden md:block w-1 h-1 rounded-full bg-[#4F6F52]"></div>
              
              <a href="mailto:ankur.gupta@themedicaltravelcompany.com" className="hover:text-white transition-colors flex items-center gap-2">
                <Mail size={16} style={{ color: theme.sage }} />
                garvit@medivoyagehealthcare.com
              </a>
              
              <div className="hidden md:block w-1 h-1 rounded-full bg-[#4F6F52]"></div>
              
              <a href="tel:+919530102585" className="hover:text-white transition-colors flex items-center gap-2">
                <Phone size={16} style={{ color: theme.sage }} />
                +91 9530102585
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          MAIN FOOTER CONTENT
      ========================================= */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div 
                style={{ backgroundColor: theme.cream, color: theme.dark }} 
                className="w-8 h-8 flex items-center justify-center font-serif italic font-bold text-lg"
              >
                M
              </div>
              <span className="text-xl font-bold font-serif tracking-tight">
                MediVoyage
              </span>
            </div>
            
            <p className="opacity-80 leading-snug max-w-sm font-light text-sm">
              Redefining medical travel through clinical precision and concierge luxury.
            </p>

            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="p-1.5 border border-[#4F6F52] hover:bg-[#739072] hover:border-[#739072] hover:text-[#3A4D39] transition-all duration-300 rounded-sm"
                  style={{ borderColor: theme.moss }}
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services (2 cols) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-base font-serif font-bold mb-3 italic" style={{ color: theme.sage }}>Services</h3>
            <ul className="space-y-2">
              {['Second Opinions', 'Medical Consultations', 'Travel Coordination', '24/7 Support', 'Post-Recovery Care'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-300 text-xs tracking-wide uppercase font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-serif font-bold mb-3 italic" style={{ color: theme.sage }}>Explore</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Book Flights', href: '#flights' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-300 text-xs tracking-wide uppercase font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
                <h3 className="text-base font-serif font-bold mb-3 italic" style={{ color: theme.sage }}>Contact</h3>
                <div className="space-y-3">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <Mail className="h-4 w-4" style={{ color: theme.sage }} />
                    <span className="text-sm font-medium border-b border-transparent group-hover:border-[#ECE3CE] transition-all">
                        medivoyagehealthcare@gmail.com
                    </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                    <Phone className="h-4 w-4" style={{ color: theme.sage }} />
                    <span className="text-sm font-medium border-b border-transparent group-hover:border-[#ECE3CE] transition-all">
                        +91 9530102585
                    </span>
                </div>

                <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5" style={{ color: theme.sage }} />
                    <span className="text-sm opacity-80 leading-snug">
                        212 CK Tower, Kishanpole Bazaar<br />
                        Achariyon ka Rasta, Jaipur
                    </span>
                </div>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{ borderColor: theme.moss }}
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-40"
        >
          <p>© 2025 MediVoyage. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Privacy</span>
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Cookies</span>
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}