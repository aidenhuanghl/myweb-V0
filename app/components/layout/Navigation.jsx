import React from 'react';

const Navigation = () => {
  return (
    <header className="main-navigation">
      <div className="logo">
        <h1>My Website</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#writing">Writing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation; 