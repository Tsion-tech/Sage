import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className='nav-logo'>TsionY</div>
      
      <ul className="nav-menu">
        <li>
          <a href="#home" className="anchor-link">Home</a>
        </li>
        <li>
          <a href="#about" className="anchor-link">About</a>
        </li>
        <li>
          <a href="#skills" className="anchor-link">Skills</a>
        </li>
        <li>
          <a href="#contact" className="anchor-link">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
