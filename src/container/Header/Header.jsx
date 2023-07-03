import React from 'react';
import { images } from "../../constants"
import { Article } from '../../components';
import './Header.css';

const Header = () => {
  const titleStyle = {  
    lineHeight: '90px',
    fontSize: '90px',
    marginTop: '1rem',
  }

  const subtitleStyle = {  
    lineHeight: '40px',
    fontSize: '30px',
    marginBottom: '0rem'
  }

  const textStyle = {
    margin: '2rem 0',
    lineHeight: '40px',
    fontSize: '25px',
  }

  let headerArticle = {
    justifyContentTo: "left",
    title:"The Key to Great Songs",
    titleStyle: titleStyle,
    subtitle: "Chase that dream sound", 
    subtitleStyle: subtitleStyle,
    text: "Does not matter if you have a spark idea or a full song. We're here to help to make a radio ready song.",
    textStyle: textStyle,
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
