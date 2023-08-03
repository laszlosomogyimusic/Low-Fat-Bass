import React from 'react';
import { images } from "../../constants"
import { Article } from '../../components';
import './Header.css';

const Header = () => {
  let headerArticle = {
    type: "large",
    justifyContentTo: "left",
    title:"The Key to Great Songs",
    subtitle: "Chase that dream sound", 
    text: "Does not matter if you have a spark idea or a full song. We're here to help to make a radio ready song.",
    buttonText: "Explore Menu"
  }  
  return (
    <section className="header app__wrapper app__section" id="home">
      <Article {...headerArticle} />
      <figure className="app__wrapper-figure">
        <img className="header__image" src={images.welcome} alt="header img" />
      </figure>    
    </section>
  )
};

export default Header;
