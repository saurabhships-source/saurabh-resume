import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
