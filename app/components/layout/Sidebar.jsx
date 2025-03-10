import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h2>Sidebar</h2>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#writing">Writing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 