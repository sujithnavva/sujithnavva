// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>React Application for Encryption</h3>
          <p>Developed a secure React app with AES encryption and RSA key generation.</p>
          <a href="https://github.com/sujithnavva/crypto-app" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>Human and Animal Detection Using OpenCV</h3>
          <p>Created a deep learning-based solution using YOLOv3 architecture for security surveillance.</p>
          <a href="https://github.com/sujithnavva/human-animal-detection" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
