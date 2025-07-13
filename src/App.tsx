import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FlightBooking from './components/FlightBooking';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';
import Login from './components/Login';
import Contact from './components/Contact';
import Treatment from './components/Treatment';
import Wellness from './components/Wellness';
import Hospitals from './components/Hospitalspages';
import Doctors from './components/Doctorspage';
import Hotels from './components/Hotels';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handlers: [string, () => void][] = [
      ['showLogin', () => setCurrentView('login')],
      ['showContact', () => setCurrentView('contact')],
      ['showTreatment', () => setCurrentView('treatment')],
      ['showWellness', () => setCurrentView('wellness')],
      ['showHospitals', () => setCurrentView('hospitals')],
      ['showFlights', () => setCurrentView('flights')],
      ['goHome', () => setCurrentView('home')],
      ['showDoctors', () => setCurrentView('home')],
      ['showHotels', () => setCurrentView('home')],
    ];

    handlers.forEach(([event, handler]) =>
      window.addEventListener(event, handler as EventListener)
    );

    return () => {
      handlers.forEach(([event, handler]) =>
        window.removeEventListener(event, handler as EventListener)
      );
    };
  }, []);

  // Page Routing
  switch (currentView) {
    case 'login':
      return <Login onBack={() => setCurrentView('home')} />;
    case 'contact':
      return <Contact onBack={() => setCurrentView('home')} />;
    case 'treatment':
      return <Treatment onBack={() => setCurrentView('home')} />;
    case 'wellness':
      return <Wellness onBack={() => setCurrentView('home')} />;
    case 'hospitals':
      return <Hospitals onBack={() => setCurrentView('home')} />;
    case 'flights':
      return <FlightBooking onBack={() => setCurrentView('home')} />;
    case 'doctors':
      return <Doctors onBack={() => setCurrentView('home')} />;
    case 'about':
      return <About />;
    default:
      return (
        <div className="min-h-screen bg-white">
          <Header onChatToggle={() => setIsChatOpen(!isChatOpen)} />
          <Hero />
          <About />
          <Services />
          <FlightBooking />
          <Footer />
          <ChatAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
      );
  }
}

export default App;
