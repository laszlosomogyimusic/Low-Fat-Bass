import React from 'react';
import { images } from "../../constants/";
import './AboutUs.css';
import { aboutUs, history } from "./data"
import { Article } from '../../components';


const AboutUs = () => (
  <section className="aboutus app__bg app__flex--center app__section" id="about">
    <figure className="aboutus__overlay app__flex--center">
      <img src={images.logoNoCircle} alt="logo 21"/>
    </figure>
    <section className="aboutus__content app__flex--center">
      <Article />
      <article className="aboutus__about">
        <h1 className="headtext__cormorant">{aboutUs.title}</h1>
        <img src={images.drumstickHorizontal} alt="guitar" className="app__image" />
        <p className="app__paragraph">{aboutUs.text}</p>
        <button type="button" className="app__button">Know more</button>
      </article>
      <figure className="aboutus__drumsticks flex__center">
        <img src={images.drumsticksVertical} alt="drumsticks vertical" />
      </figure>
      <article className="aboutus__history">
        <h1 className="headtext__cormorant">{history.title}</h1>
        <img src={images.drumstickHorizontal} alt="guitar" className="app__image" />
        <p className="app__paragraph">{history.text}</p>
        <button type="button" className="app__button">Know more</button>
      </article>      
    </section>
  </section>
);

export default AboutUs;
