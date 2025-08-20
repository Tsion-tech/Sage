import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../images/portfolio.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  const[menu,setMenu]= useState("home")
  return (
    <div className="navbar">
      <div className='nav-logo'>TsionY</div>
     <ul className="nav-menu">
  <li>
    
    <AnchorLink className="anchor-link" href="#home">
      <p onClick={() => setMenu("home")}>Home</p>
    </AnchorLink>
    
  </li>

  <li>
    <AnchorLink className="anchor-link" offset={50} href="#about">
      <p onClick={() => setMenu("about")}>About</p>
    </AnchorLink>
    
  </li>

  <li>
    <AnchorLink className="anchor-link" offset={50} href="#skills">
      <p onClick={() => setMenu("skills")}>Skills</p>
    </AnchorLink>
    
  </li>

  <li>
    <AnchorLink className="anchor-link" offset={50} href="#contacts">
      <p onClick={() => setMenu("contacts")}>Contact</p>
    </AnchorLink>
    
  </li>
</ul>

      

      
    </div>
  );
};

export default NavBar;