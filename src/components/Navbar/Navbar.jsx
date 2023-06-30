import React, { useState } from 'react'
import { GiHamburgerMenu, GiMusicSpell } from 'react-icons/gi';


import images from '../../constants/images';
import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <figure className="navbar__figure">
        <img className="navbar__image" src={images.laszloSomogyiMusic} alt="app logo" />
      </figure>
      <ul className="navbar__links">
        <li className="app__paragraph navbar__linkitem"><a href="#home">Home</a></li>
        <li className="app__paragraph navbar__linkitem"><a href="#about">About</a></li>
        <li className="app__paragraph navbar__linkitem"><a href="#menu">Menu</a></li>
        <li className="app__paragraph navbar__linkitem"><a href="#awards">Awards</a></li>
        <li className="app__paragraph navbar__linkitem"><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar__login">
        <a href="#login" className="app__paragraph navbar__anchor">Log In / Register</a>
        <div className="navbar__decoration" />
        <a href="/" className="app__paragraph navbar__anchor">Book Table</a>
      </div>      
      <div className="navbar__hamburgermenu">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className="navbar__hamburgermenu-content app__flex--center slide-bottom">
            <GiMusicSpell fontSize={27} className="navbar__hamburgermenu-closebutton" onClick={() => setToggleMenu(false)} />
            <ul className="navbar__hamburgermenu-links">
              <li className="app__paragraph navbar__hamburgermenu-linkitem"><a href="#home">Home</a></li>
              <li className="app__paragraph navbar__hamburgermenu-linkitem"><a href="#about">About</a></li>
              <li className="app__paragraph navbar__hamburgermenu-linkitem"><a href="#menu">Menu</a></li>
              <li className="app__paragraph navbar__hamburgermenu-linkitem"><a href="#awards">Awards</a></li>
              <li className="app__paragraph navbar__hamburgermenu-linkitem"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>   
    </nav>
  )
}

export default Navbar