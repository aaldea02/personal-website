import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <h1 className="header-text">Arsen Aldea's Personal Website</h1>
      <nav className="header-nav">
        <a href="#about-me" className="nav-link">About Me</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="#projects" className="nav-link">Projects</a>
      </nav>
    </header>
  );
}

export default Header;
