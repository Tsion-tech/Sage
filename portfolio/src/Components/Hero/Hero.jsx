import React from "react";
import './Hero.css'
import profile_img from '../../images/portfolio.jpg'

const Hero =() => {
    return(
        <div className='hero'>
            <img src={profile_img} alt="profile" className="profile-img"/>
            <h1><span>I'm Tsion Yeshetila,</span></h1>
            <p>Software Engineer|MERN Stack developer</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">View my work</div>
            </div>

        </div>
    )
}
export default Hero