import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Layout & Helper Components
import ScrollToTop from './components/ScrollToTop';

// 2. Page Components
import HomePage from './pages/HomePage';
import MyConcierge from './components/myconcierge';
import Wellness from './components/Wellness';
import Treatment from './components/Treatment';
import VideoCall from './components/VideoCall';
import OrthopaedicsLanding from './pages/OrthopaedicsLanding';

// --- NEW IMPORT ---
import MainLanding from './pages/MainLanding';

function App() {
  return (
    <Router>
      {/* Ensures pages start at the top when navigating */}
      <ScrollToTop />
      
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Independent Pages */}
        <Route path="/myconcierge" element={<MyConcierge />} />
        <Route 
          path="/treatment" 
          element={<Treatment onBack={() => window.history.back()} />} 
        />
        <Route 
          path="/wellness" 
          element={<Wellness onBack={() => window.history.back()} />} 
        />

        {/* Teleconsultation & Specific Landing Pages */}
        <Route path="/consultation" element={<VideoCall />} />
        <Route path="/ortho-care" element={<OrthopaedicsLanding />} />

        {/* --- YOUR NEW ROUTE --- */}
        {/* This makes mymedivoyage.com/mainlanding work */}
        <Route path="/mainlanding" element={<MainLanding />} />
        
      </Routes>
    </Router>
  );
}

export default App;