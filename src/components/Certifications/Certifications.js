import React, { useState, useEffect } from 'react';
import './Certifications.css';

// Import your certification images
import securityTitanCert from '../../assets/appsec-titan.png';
import frontEndCert from '../../assets/frontend-react.png';

const certifications = [
  {
    title: 'Application Security Titan Bronze Level',
    issuer: 'DBS Bank',
    image: securityTitanCert,
    description: 'Recognized for advanced application security skills and practices.'
  },
  {
    title: 'Front End Developer - React',
    issuer: 'DBS Bank',
    image: frontEndCert,
    description: 'Certified in modern front-end development using React technologies.'
  }
];

const Certifications = () => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentCertIndex((prevIndex) => 
          (prevIndex + 1) % certifications.length
        );
        setIsTransitioning(false);
      }, 500); // Half of the total transition time
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentCert = certifications[currentCertIndex];

  return (
    <div className="certifications-container">
      <h2>Professional Certifications</h2>
      <div className="certification-carousel">
        <div 
          className={`certification-card ${isTransitioning ? 'transitioning' : ''}`}
        >
          <img 
            src={currentCert.image} 
            alt={currentCert.title}
          />
          <div className="certification-overlay">
            <h3>{currentCert.title}</h3>
            <p>{currentCert.issuer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;