import React from 'react';
import { SubHeading } from "../../components"
import { images } from "../../constants"
import './Header.css';

const Header = () => (
  <section className="header app__wrapper app__section" id="home">
    <article className="app__wrapper-info">
      <SubHeading title="Chase that dream sound" />
      <h1 className="header__h1">The Key to Great Songs</h1>
      <p className="app__subheader" style={{ margin: '2rem 0' }}>Does not matter if you have a spark idea or a full song. We're here to help to make a radio ready song.</p>
      <button type="button" className="app__button">Explore Menu</button>
    </article>
    <figure className="app__wrapper-figure">
      <img className="header__image" src={images.welcome} alt="header img" />
    </figure>    
  </section>
);

export default Header;
