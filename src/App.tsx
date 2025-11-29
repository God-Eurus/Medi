import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Import your page and layout components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Login from './components/Login';
import Contact from './components/Contact';
import Treatment from './components/Treatment';
import Wellness from './components/Wellness';
import Hospitals from './components/Hospitalspages';

import FlightBooking from './components/FlightBooking';

import HospitalDetail from './components/HospitalDetail';
import WhatsAppButton from "./components/WhatsAppButton";
import MedivoyageConcierge from "./components/myconcierge"; 
import ScrollToTop from "./components/ScrollToTop";// ✅ Import the Concierge component

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
  </>
);

const MainLayout = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onChatToggle={() => setIsChatOpen(!isChatOpen)} />
      <main>
        <Outlet />
      </main>
      <Footer />
    
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        {/* Routes that should have the main Header and Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="treatment" element={<Treatment />} />
          <Route path="wellness" element={<Wellness />} />
          <Route path="hospitals" element={<Hospitals />} />
          
          <Route path="flights" element={<FlightBooking />} />
          <Route path="contact" element={<Contact />} />
          <Route path="hospital/:hospitalId" element={<HospitalDetail />} />
          
          {/* ✅ Added route for Concierge */}
          <Route path="myconcierge" element={<MedivoyageConcierge />} />
        </Route>

        {/* Routes that might have a different layout can go here */}
        
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;