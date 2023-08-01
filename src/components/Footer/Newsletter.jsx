import React from 'react';

import { Article } from '../../components';

import './Newsletter.css';

const Newsletter = () => {
  let newsletterArticle = {
    type: "normal",
    justifyContentTo: "center",
    title: "Subscribe To Our Newsletter",
    subtitle: "Newsletter",
    text: "And never miss the latest Updates!"
  }

  return (
    <section className="newsletter">
      <div className="newsletter__heading">
        <Article {...newsletterArticle} />
      </div>
      <div className="newsletter__input app__flex--center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="article__button">Subscribe</button>
      </div>
    </section>
  )
};

export default Newsletter;
