import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import JourneyPage from './Pages/JourneyPage/JourneyPage';
import BlogPage from './Pages/BlogPage/BlogPage';

const Home = () => {
  return (
    <>
      <div id="home">
        <Hero />
        <div id="aboutme">
          <AboutMe />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        {/* <div id="journey">
          <Journey />
        </div> */}
        <div id="projects">
          <Projects />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/blog" element={<BlogPage />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;