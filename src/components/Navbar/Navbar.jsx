import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle the scroll to Hero section when logo is clicked
  const handleLogoClick = (event) => {
    event.preventDefault();
    const hero = document.querySelector(".hero-container");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle scroll to footer when Contact is clicked
  const handleContactClick = (event) => {
    event.preventDefault();
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1 onClick={handleLogoClick}>SujithNavva</h1>
      </div>
      <div className="hamburger" onClick={handleMenuToggle}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#aboutme">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#footer" onClick={handleContactClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
