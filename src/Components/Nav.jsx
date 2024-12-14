import React from 'react';
import './Nav.css'; // Assuming you want to add some CSS styles
import { Link } from 'react-router-dom';
import logo1 from "../assets/images/leadGEn/logo.svg"

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      
     <img src={logo1} alt="Logo" className="logo" /> 
     
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/admin">Admin Section</Link></li>
          <li><Link to="/testimonials">About us</Link></li>
          <li><Link to="/projects">Our Projects</Link></li>
          <li><Link to="/clients">What Clients Say</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
