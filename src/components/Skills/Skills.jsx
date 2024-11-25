// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skills-category">
          <h3 className="category-title">Frontend</h3>
          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.JS</span>
          </div>
        </div>

       

        <div className="skills-category">
          <h3 className="category-title">Backend</h3>
          <div className="skills">
            <span>Node.js</span>
            <span>Java</span>
            <span>Python</span>
            <span>Spring Boot</span>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title">Cybersecurity Tools</h3>
          <div className="skills">
            <span>Burp Suite</span>
            <span>Wireshark</span>
            <span>Autopsy</span>
            <span>Nmap</span>
            <span>Metasploit</span>
            <span>OWASP ZAP</span>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title">Databases</h3>
          <div className="skills">
            <span>MySQL</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title">DevOps & Tools</h3>
          <div className="skills">
            <span>Docker</span>
            <span>Jenkins</span>
            <span>Git</span>
            <span>Grafana</span>
            <span>Kibana</span>
            <span>AppDynamics</span>
          </div>
        </div>

        {/* <div className="skills-category">
          <h3 className="category-title">Cloud Platforms</h3>
          <div className="skills">
            <span>AWS</span>
            <span>Azure</span>
          </div>
        </div> */}
{/* 
        <div className="skills-category">
          <h3 className="category-title">Security</h3>
          <div className="skills">
            <span>Application Security</span>
            <span>Computer Security</span>
            <span>Cryptography</span>
            <span>Forensics</span>
            <span>Secure coding practices</span>
            <span>Encryption</span>
            <span>Authentication</span>
            <span>Authorization</span>
          </div>
        </div> */}

       
      </div>
    </section>
  );
};

export default Skills;
