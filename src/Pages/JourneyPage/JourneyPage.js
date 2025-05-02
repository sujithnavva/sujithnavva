import React from 'react';
import { motion } from 'framer-motion';
import './JourneyPage.css';
const JourneyDetails = [
  {
    period: '2018 - 2022',
    title: 'B.Tech in Computer Science',
    institution: 'SRM University',
    description: 'Embarked on a transformative academic journey, laying the groundwork for technological innovation.',
    highlights: [
      'Mastered complex algorithms and data structures',
      'Led innovative team projects',
      'Received academic excellence awards'
    ],
    achievements: [
      { label: 'GPA', value: '8.7/10' },
      { label: 'Projects', value: '15+' },
      { label: 'Hackathons', value: '5' }
    ],
    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    icon: '🚀'
  },
  {
    period: '2022 - 2024',
    title: 'Application Developer',
    institution: 'DBS Bank',
    description: 'Transformed theoretical knowledge into real-world banking solutions, driving digital innovation.',
    highlights: [
      'Engineered scalable microservices',
      'Optimized application performance',
      'Implemented cutting-edge security protocols'
    ],
    achievements: [
      { label: 'Projects', value: '8' },
      { label: 'Technologies', value: '10+' },
      { label: 'Impact', value: 'Millions in efficiency' }
    ],
    background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
    icon: '💡'
  },
  {
    period: '2024 - Present',
    title: 'MSc in Cybersecurity',
    institution: 'Nanyang Technological University',
    description: 'Diving deep into the intricate world of digital defense, reshaping the future of cybersecurity.',
    highlights: [
      'Advanced threat detection research',
      'Developing AI-powered security frameworks',
      'Collaborating with industry experts'
    ],
    achievements: [
      { label: 'Research Papers', value: '2' },
      { label: 'Certifications', value: '3' },
      { label: 'Conferences', value: '4' }
    ],
    background: 'linear-gradient(135deg, #20bf6b 0%, #4cd3e3 100%)',
    icon: '🛡️'
  }
];

const JourneyPage = () => {
  return (
    <div className="timeline-container">
      <h1 className="timeline-title">Professional Odyssey</h1>
      <p className="timeline-subtitle">A narrative of growth, innovation, and continuous learning</p>

      <div className="timeline">
        {JourneyDetails.map((journey, index) => (
          <motion.div 
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon" style={{ background: journey.background }}>
              <span>{journey.icon}</span>
            </div>

            <div className="timeline-content">
              <h3>{journey.period}</h3>
              <h2>{journey.title} <span>@ {journey.institution}</span></h2>
              <p>{journey.description}</p>
              <ul className="highlights">
                {journey.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="achievements">
                {journey.achievements.map((ach, i) => (
                  <div key={i} className="achievement">
                    <strong>{ach.label}:</strong> {ach.value}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JourneyPage;
