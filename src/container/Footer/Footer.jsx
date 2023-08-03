import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {


  return (
    <footer className="footer app__section" id="login">
      <Newsletter />

      <section className="footer__links">
        <article className="footer__contact">
          <h1 className="article__subtitle">Contact Us</h1>
          <p className="article__text">4 Privet Drive</p>
          <p className="article__text">+1234567890</p>
          <p className="article__text">+1234567890</p>
        </article>

        <article className="footer__logo">
          <img className="footer__logo-image" src={images.laszloSomogyiMusic} alt="footer_logo" />
          <p className="article__text">&quot;Do the music. Do the dance.&quot;</p>
          <img className="article__image"  src={images.drumstickHorizontal} style={{ marginTop: 15 }} alt="footer laszlo somogyim music" />
          <div className="footer__icons">
            <FiFacebook className="footer__icon"/>
            <FiTwitter className="footer__icon" />
            <FiInstagram className="footer__icon" />
          </div>
        </article>

        <article className="footer__workinghours">
          <h1 className="article__subtitle">Working Hours</h1>
          <p className="article__text">Monday-Friday:</p>
          <p className="article__text">08:00 am - 12:00 am</p>
          <p className="article__text">Saturday-Sunday:</p>
          <p className="article__text">07:00 am - 11:00 pm</p>
        </article>
      </section>

      <section className="footer__copyright">
        <p className="article__text">2023 Laszlo Somogyi Music. All Rights reserved.</p>
      </section>

    </footer>
  )
};

export default Footer;
