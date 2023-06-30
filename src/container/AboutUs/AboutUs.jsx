import React from 'react';
import { images } from "../../constants/";
import './AboutUs.css';

const AboutUs = () => (
  <div className="aboutus app__bg app__flex--center app__section" id="about">
    <div className="aboutus__overlay app__flex--center">
      <img src={images.logoNoCircle} alt="logo 21"/>
    </div>
    <div className="aboutus__content app__flex--center">
      <div className="aboutus__about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.guitar} alt="guitar" className="app__image" />
        <p className="app__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="app__button">Know more</button>
      </div>
      <div className="aboutus__drumsticks flex__center">
        <img src={images.drumsticks} alt="drumsticks" />
      </div>
      <div className="aboutus__history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.guitar} alt="guitar" className="app__image" />
        <p className="app__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="app__button">Know more</button>
      </div>      
    </div>
  </div>
);

export default AboutUs;
