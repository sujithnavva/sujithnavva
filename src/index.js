import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import path for React 18
import './index.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS

// Initialize AOS (for animations)
AOS.init();

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
