import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {


  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="article__subtitle">Contact Us</h1>
          <p className="article__text">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="article__text">+1 212-344-1230</p>
          <p className="article__text">+1 212-555-1230</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="article__text">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="article__subtitle">Working Hours</h1>
          <p className="article__text">Monday-Friday:</p>
          <p className="article__text">08:00 am - 12:00 am</p>
          <p className="article__text">Saturday-Sunday:</p>
          <p className="article__text">07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="article__text">2021 Gericht. All Rights reserved.</p>
      </div>

    </div>
  )
};

export default Footer;
