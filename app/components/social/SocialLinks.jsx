import React from 'react';

const SocialLinks = () => {
  return (
    <section className="social-links" id="contact">
      <h2>Connect With Me</h2>
      <div className="social-icons">
        <a href="#" className="social-icon">
          <span>Twitter</span>
        </a>
        <a href="#" className="social-icon">
          <span>LinkedIn</span>
        </a>
        <a href="#" className="social-icon">
          <span>GitHub</span>
        </a>
        <a href="#" className="social-icon">
          <span>Instagram</span>
        </a>
      </div>
      <div className="contact-info">
        <p>Email: example@email.com</p>
      </div>
    </section>
  );
};

export default SocialLinks; 