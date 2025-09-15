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
import Doctors from './components/Doctorspage';
import FlightBooking from './components/FlightBooking';
import ChatAssistant from './components/ChatAssistant';
import HospitalDetail from './components/HospitalDetail'; // ✅ 1. Import the HospitalDetail component

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
      <ChatAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes that should have the main Header and Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="treatment" element={<Treatment />} />
          <Route path="wellness" element={<Wellness />} />
          <Route path="hospitals" element={<Hospitals />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="flights" element={<FlightBooking />} />
          <Route path="contact" element={<Contact />} />
          {/* ✅ 2. Activated the route for the hospital detail page */}
          <Route path="hospital/:hospitalId" element={<HospitalDetail />} />
        </Route>

        {/* Routes that might have a different layout */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;