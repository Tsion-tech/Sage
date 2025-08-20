import React from "react";
import './Hero.css'
import profile_img from '../../images/portfolio.jpg'

const Hero =() => {
    return(
        <div id='home'className='hero'>
            <img src={profile_img} alt="profile" className="profile-img"/>
            <h1><span>I'm Tsion Yeshetila,</span></h1>
            <p>Software Engineer|MERN Stack developer</p>
            <div className="hero-action">
                <div id= "contacts" className="hero-connect">Connect with me</div>
                <div id= "skills"className="hero-resume">my skills</div>
            </div>

        </div>
    )
}
export default Hero