import React from 'react';

const Introduction = () => {
  return (
    <section className="introduction" id="home">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">Your Name</span></h1>
        <h2>Web Developer & Designer</h2>
        <p className="intro-text">
          Welcome to my personal website. I'm passionate about creating 
          beautiful and functional web experiences.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">See My Work</button>
          <button className="secondary-btn">Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default Introduction; 