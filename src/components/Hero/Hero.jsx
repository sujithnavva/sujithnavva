import React from 'react';
import './Hero.css';
import resumeIcon from '../../assets/resume-icon.png'; // Path to your resume icon image
import profileImg from '../../assets/profile-image.png'; // Path to your default profile image
import resumeFile from '../../assets/resume.pdf'; // Path to your resume PDF

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="typing-effect">Sujith Kumar Navva</h1>
        <h2>Full-Stack Developer | Cybersecurity Enthusiast</h2>
        <p>Pursuing MSc in Cybersecurity at Nanyang Technological University</p>

        <div className="cta-container">
          {/* View My Work CTA Button */}
          <button className="cta-button" onClick={() => window.location.href = '#experience'}>
            View My Work
          </button>

          {/* Resume Icon with Attribution */}
          <a 
            href={resumeFile}  // Link to the actual resume file
            target="_blank"
            rel="noopener noreferrer"
            className="resume-icon-link"
            aria-label="Download Resume"
          >
            <img src={resumeIcon} alt="Resume Icon" className="resume-icon" />
          </a>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="hero-image">
        <img 
          src={profileImg} 
          alt="Sujith Kumar Navva" 
          className="profile-img"
          id="profile-img" 
        />
      </div>

      {/* Flaticon Attribution */}
      <div className="flaticon-attribution">
        <p>
          <a href="https://www.flaticon.com/free-icons/cv" title="CV icons" target="_blank" rel="noopener noreferrer">
           
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
