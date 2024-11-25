// src/components/Experience.jsx
import React from 'react';
import './Experience.css';
import dbsLogo from '../../assets/dbs-logo.png';  // DBS logo image

const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <h2>Professional Experience</h2>
      <div className="experience-item">
        <img src={dbsLogo} alt="DBS Bank Logo" className="dbs-logo" />
        <div className="experience-content">
          <h3>DBS Tech India (DBS Bank) – Analyst</h3>
          <span className="duration">July 2022 – August 2024</span>
          <ul className="experience-list">
            <li>Developed scalable web applications for the fintech sector, emphasizing secure coding practices and effective vulnerability management to enhance overall application security.</li>
            <li>Collaborated with cross-functional teams to gather software requirements, ensuring compliance with security standards and business objectives, while using agile methodologies to ease prompt delivery.</li>
            <li>Conducted thorough testing and security assessments, leveraging Grafana and Kibana for performance monitoring and optimization, proactively addressing security-related issues.</li>
          </ul>
          <h3>Certifications</h3>
      <ul className="certifications">
        <li>Application Security Titan Bronze Level – DBS Bank</li>
        <li>Tech Certification: Front End Developer - React Language [DBS Bank]</li>
      </ul>
      <h3>Additional Information</h3>
      <p className="additional-info">
        Security Expertise: Proficient in secure coding practices, encryption, and compliance with security standards including GDPR and PCI DSS & Financial Sector Knowledge.
      </p>
        </div>
      </div>
      
    </section>
  );
};

export default Experience;
