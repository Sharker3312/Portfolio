import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navigation />
      <Hero />
      <Certifications />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;