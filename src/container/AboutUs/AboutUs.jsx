import React from 'react';
import { images, article } from "../../constants";
import './AboutUs.css';
import { aboutUs, history } from "./data"
import { Article } from '../../components';


const AboutUs = () => (
  <section className="aboutus app__bg app__flex--center app__section" id="about">
    <figure className="aboutus__overlay app__flex--center">
      <img src={images.logoNoCircle} alt="logo 21"/>
    </figure>
    <section className="aboutus__content app__flex--center">
      <Article 
        side = "left"
        title = {aboutUs.title}
        text = {aboutUs.text}
        isTextColorGrey = {true}
        buttonText = "Know more" />
      <figure className="aboutus__drumsticks flex__center">
        <img src={images.drumsticksVertical} alt="drumsticks vertical" />
      </figure>
      <Article 
        side = "right"
        title = {history.title}
        text = {history.text}
        isTextColorGrey = {true}
        buttonText = "Know more" />      
    </section>
  </section>
);

export default AboutUs;
