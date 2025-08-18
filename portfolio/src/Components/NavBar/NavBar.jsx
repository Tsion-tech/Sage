import React from 'react';
import './NavBar.css';
import logo from '../../images/portfolio.jpg';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className='nav-logo'>TsionY</div>
      <ul className="nav-menu">
        
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <div className="nav-connect">
        Connect with Me
      </div>
    </div>
  );
};

export default NavBar;