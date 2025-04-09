import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <div className="home-content">
          <h1>Hello, I'm <span className="highlight">Your Name</span></h1>
          <h2>Full-Stack Developer</h2>
          <p className="tagline">Building elegant solutions for complex problems</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
