import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ 1. Import Link for navigation
import { Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onChatToggle: () => void;
}

export default function Header({ onChatToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ 2. Updated navLinks to use URL paths instead of events
  const navLinks = [
    // { label: 'Home', path: '/' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Hospitals', path: '/hospitals' },
    { label: 'Treatment', path: '/treatment' },
    { label: 'Wellness', path: '/wellness' },
  ];
  


  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - can also be a link to home */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="MediVoyage Logo" className="h-10 w-auto" />
            <span className="ml-2 text-xl font-bold text-gray-900">MediVoyage</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map(({ label, path }) => (
              // ✅ 4. Replaced <a> tag with <Link>
              <Link
                key={label}
                to={path}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {label}
              </Link>
            ))}
            {/* ✅ 4. Replaced <button> with <Link> */}
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
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
              {navLinks.map(({ label, path }) => (
                // ✅ 4. Replaced <a> tag with <Link>
                <Link
                  key={label}
                  to={path}
                  // ✅ 5. Added onClick to close menu after navigation
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left px-2 py-1"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}