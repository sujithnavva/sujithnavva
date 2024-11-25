// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <p className="footer-text">Contact: <a href="mailto:navv0001@e.ntu.edu.sg">navv0001@e.ntu.edu.sg</a> | +65 98854920</p>
        <p className="footer-text">Connect with me: <a href="https://www.linkedin.com/in/sujith-kumar-navva" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://www.instagram.com/sujithnavva/" target="_blank" rel="noopener noreferrer">Instagram</a> </p>
      </div>
    </footer>
  );
};

export default Footer;
