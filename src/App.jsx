// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './data/ScrollToTop';

import Index from './pages/Index';
import Fleet from './pages/Fleet';
import CarDetailsPage from './pages/CarDetails';
import Dashboard from './pages/Dashboard';
import RentVehiclePage from './pages/Reservation';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/car/:id" element={<CarDetailsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reserve" element={<RentVehiclePage />} />
        <Route path="/company/contact" element={<Contact />} />
        <Route path="/company/about-us" element={<AboutUs />} />

      </Routes>
    </>
  );
};

export default App;
