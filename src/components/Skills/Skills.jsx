import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('cybersecurityCloud'); // Default tab
  const [showSkills, ] = useState(true); // To toggle skill names visibility

  // Define Skills by Category
  const renderSkills = (category) => {
    switch (category) {
      case 'cybersecurityCloud':
        return (
          <div className="skills-cards">
            <div className="skill-card">
              <div className="skill-icon">🐍</div>
              {showSkills && <div className="skill-name">Python</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              {showSkills && <div className="skill-name">Bash/Shell Scripting</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">🛠️</div>
              {showSkills && <div className="skill-name">Burp Suite</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔍</div>
              {showSkills && <div className="skill-name">Wireshark</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">💣</div>
              {showSkills && <div className="skill-name">Metasploit</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">🧠</div>
              {showSkills && <div className="skill-name">OWASP ZAP</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">🧠</div>
              {showSkills && <div className="skill-name">MITRE ATT&CK</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎯</div>
              {showSkills && <div className="skill-name">Attack Navigator</div>}
            </div>
          </div>
        );
      case 'frontendDev':
        return (
          <div className="skills-cards">
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              {showSkills && <div className="skill-name">React.js</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">🌐</div>
              {showSkills && <div className="skill-name">HTML5</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              {showSkills && <div className="skill-name">CSS3</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">🖥️</div>
              {showSkills && <div className="skill-name">JavaScript</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">📜</div>
              {showSkills && <div className="skill-name">TypeScript</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              {showSkills && <div className="skill-name">Webpack</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">🧰</div>
              {showSkills && <div className="skill-name">Babel</div>}
            </div>
          </div>
        );
      case 'sreCloud':
        return (
          <div className="skills-cards">
            <div className="skill-card">
              <div className="skill-icon">🐳</div>
              {showSkills && <div className="skill-name">Docker</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              {showSkills && <div className="skill-name">Kubernetes</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔧</div>
              {showSkills && <div className="skill-name">Git</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚡</div>
              {showSkills && <div className="skill-name">Jenkins</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">☁️</div>
              {showSkills && <div className="skill-name">AWS</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">☁️</div>
              {showSkills && <div className="skill-name">Azure</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">☁️</div>
              {showSkills && <div className="skill-name">GCP</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">🛠️</div>
              {showSkills && <div className="skill-name">Terraform</div>}
            </div>
          </div>
        );
      case 'siemForensics':
        return (
          <div className="skills-cards">
            <div className="skill-card">
              <div className="skill-icon">📊</div>
              {showSkills && <div className="skill-name">ELK Stack</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">📊</div>
              {showSkills && <div className="skill-name">Grafana</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">📊</div>
              {showSkills && <div className="skill-name">AppDynamics</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔍</div>
              {showSkills && <div className="skill-name">Autopsy</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚖️</div>
              {showSkills && <div className="skill-name">Incident Response</div>}
            </div>
            <div className="skill-card">
              <div className="skill-icon">🕵️</div>
              {showSkills && <div className="skill-name">Forensic Analysis</div>}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="skills-container">
      <h2 className="skills-heading">Skills</h2>

      {/* Tab Navigation */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'cybersecurityCloud' ? 'active' : ''}`}
          onClick={() => setActiveTab('cybersecurityCloud')}
        >
          Cybersecurity
        </button>
        <button
          className={`tab ${activeTab === 'frontendDev' ? 'active' : ''}`}
          onClick={() => setActiveTab('frontendDev')}
        >
          Frontend Development
        </button>
        <button
          className={`tab ${activeTab === 'sreCloud' ? 'active' : ''}`}
          onClick={() => setActiveTab('sreCloud')}
        >
          SRE & Cloud
        </button>
        <button
          className={`tab ${activeTab === 'siemForensics' ? 'active' : ''}`}
          onClick={() => setActiveTab('siemForensics')}
        >
          SIEM & Forensics
        </button>
      </div>

      {/* Skills List based on Active Tab */}
      <div className="skills-category">
        {renderSkills(activeTab)}
      </div>

      {/* Toggle to hide/show names */}
      
    </section>
  );
};

export default Skills;
