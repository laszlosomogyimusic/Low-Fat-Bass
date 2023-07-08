import React from 'react';
import { images } from "../../constants"
import { Article } from '../../components';

import './Owner.css';

const Owner = () => {
  let ownerArticle = {
    type: "normal",
    justifyContentTo: "left",
    title:"What we believe in",
    subtitle: "Owner's Word", 
    text: "Do the music. Do the dance.",
  }  
  return (
    <section className="owner app__bg app__wrapper app__section" id="home">
      <figure className="app__wrapper-figure">
        <img className="owner__image" src={images.welcome} alt="header img" />
      </figure>    
      <Article {...ownerArticle} />
    </section>
  )
  };

export default Owner;
