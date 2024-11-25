// src/components/Journey.jsx
import React from 'react';
import './Journey.css';

const Journey = () => {
  return (
    <section id="journey" className="journey-container">
      <h2>My Journey</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2018 - 2022</h3>
            <p>B.Tech in Computer Science, SRM University</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2022 - 2024</h3>
            <p>Application Developer at DBS Bank</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2024 - Present</h3>
            <p>MSc in Cybersecurity, Nanyang Technological University</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
