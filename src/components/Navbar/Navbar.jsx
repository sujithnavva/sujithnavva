import React, { useState,  } from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };
  // Scroll to section
  const scrollToSection = (sectionId) => {
    // Close mobile menu
    setIsMenuOpen(false);

    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
    }

    // Use setTimeout to ensure we're on home page before scrolling
    setTimeout(() => {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="logo">
      <h1 onClick={handleLogoClick}>SujithNavva</h1>
      </div>
      <div className="hamburger" onClick={handleMenuToggle}>
        &#9776;
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => scrollToSection("#aboutme")}>
          <a href="#aboutme">About Me</a>
        </li>
        <li onClick={() => scrollToSection("#skills")}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => scrollToSection("#experience")}>
          <a href="#experience">Experience</a>
        </li>
        <li onClick={() => scrollToSection("#projects")}>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <Link to="/journey">Journey</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li onClick={() => scrollToSection("#footer")}>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;