import React from "react";
import './Hero.css'
import profile_img from '../../images/portfolio.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="profile" className="profile-img"/>
      <h1><span>I'm Tsion Yeshetila,</span></h1>
      <p>Software Engineer | MERN Stack Developer</p>

      <div className="hero-action">
        
        <a href="#contact" className="hero-connect">Connect with me</a>
        <a href="#skills" className="hero-resume">My Skills</a>
      </div>
    </div>
  )
}

export default Hero;
