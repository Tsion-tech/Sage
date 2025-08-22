import React from "react";
import './Contacts.css';
import Vector from '../../images/Vector.png';
import Vectorr from '../../images/Vectorr.png';
import location from '../../images/location.png';

export default function Contacts() {
  return (
      <div id="contact" className="contact-section">
        <div className="contact-left">
        <h1>Let's talk</h1>
        <p>I'm currently available to take on new projects...</p>

        <div className="contact-details">
          <div className="contact-detail">
            <img className="imgg" src={Vector} alt="email"/>
            <p>Tsionyeshetila977@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img className="imgg" src={Vectorr} alt="phone"/>
            <p>+251 9 95 02 03 96</p>
          </div>
          <div className="contact-detail">
            <img className="imgg" src={location} alt="location"/>
            <p>AA, Ethiopia</p>
          </div>
        </div>
      </div>

      <form className="contact-right">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" placeholder="Enter your name" name="name"/>

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" placeholder="Enter your email" name="email"/>

        <label htmlFor="message">Write your message here</label>
        <textarea id="message" name="message" rows="8" placeholder="Enter your message"></textarea>

        <button type="submit" className="contact-submit">Submit now</button>
      </form>
    </div>
  )
}
