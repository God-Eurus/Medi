import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onChatToggle: () => void;
}

export default function Header({ onChatToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', event: 'goHome' },
    { label: 'Treatment', event: 'showTreatment' },
    { label: 'Wellness', event: 'showWellness' },
    { label: 'Hospitals', event: 'showHospitals' },
    { label: 'Doctors', event: 'showDoctors' },
    { label: 'Hotels', event: 'showHotels' },
    { label: 'Book Flights', event: 'showFlights' },
  ];

  const handleNavClick = (event: string) => {
    window.dispatchEvent(new CustomEvent(event));
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="MediVoyage Logo" className="h-10 w-auto" />
            <span className="ml-2 text-xl font-bold text-gray-900">MediVoyage</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(({ label, event }) => (
              <a
                key={label}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(event);
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('showContact'));
                setIsMenuOpen(false);
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onChatToggle}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
              title="AI Assistant"
            >
              <MessageCircle className="h-6 w-6" />
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(({ label, event }) => (
                <a
                  key={label}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(event);
                  }}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('showContact'));
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
