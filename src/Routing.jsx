import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Formforclient from './Components/theFIrstSection/Formforclient';
import Footer from './Components/Footer/Footer.jsx';
import Admin from './Components/Admin/Admin.jsx';
import UpdateTestimonial from './Components/Admin/UpdateTestimonial.jsx';
import UpdateProject from './Components/Admin/UpdateProject.js';
import Testimonials from './Components/HappyClients/Clients.jsx';

const Routing = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Formforclient />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/createTestimonials" element={<UpdateTestimonial />} />
        <Route path="/createProject" element={<UpdateProject />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
