// src/App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Journey from './components/Journey/Journey';
import Experience from './components/Experience/Experience';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Journey />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
