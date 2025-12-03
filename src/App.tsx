import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Layout & Helper Components
import ScrollToTop from './components/ScrollToTop';

// 2. Page Components
import HomePage from './pages/HomePage';
import MyConcierge from './components/myconcierge'; // Matches your lowercase filename
import Wellness from './components/Wellness';
import Treatment from './components/Treatment';
// If you haven't created these yet, they can be simple placeholders for now
// import BookingPage from './pages/BookingPage'; 

function App() {
  return (
    <Router>
      {/* Ensures pages start at the top when navigating */}
      <ScrollToTop />
      
      <Routes>
        {/* Main Home Page (Contains Doctors, Hospitals, Treatments sections) */}
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

       
      </Routes>
    </Router>
  );
}

export default App;