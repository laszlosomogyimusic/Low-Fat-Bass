import React from 'react';
import { images } from "../../constants";
import './AboutUs.css';
import { aboutUs, history } from "./data"
import { Article } from '../../components';


const AboutUs = () => (
  <section className="aboutus app__bg app__flex--center app__section" id="about">
    <div className="aboutus__logo21 app__flex--center">
      <img className="aboutus__logo21--image" src={images.logoNoCircle} alt="logo 21"/>
    </div>
    <section className="aboutus__content app__flex--center">
      <Article 
        justifyContentTo = "right"
        title = {aboutUs.title}
        text = {aboutUs.text}
        textModifierClass="aboutus__article-text--grey"
        isTextColorGrey = {true}
        buttonText = "Know more" />
      <figure className="aboutus__drumsticks flex__center">
        <img className="aboutus__drumsticks-image" src={images.drumsticksVertical} alt="drumsticks vertical" />
      </figure>
      <Article 
        justifyContentTo = "left"
        title = {history.title}
        text = {history.text}
        isTextColorGrey = {true}
        buttonText = "Know more" />      
    </section>
  </section>
);

export default AboutUs;
