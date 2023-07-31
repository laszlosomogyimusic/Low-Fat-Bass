import React from 'react';

import { Article } from '../../components';

import './Newsletter.css';

const Newsletter = () => {
  let newsletterArticle = {
    type: "normal",
    justifyContentTo: "center",
    title: "Subscribe To Our Newsletter",
    subtitle: "Newsletter",
    text: "And never miss latest Updates!"
  }

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <Article {...newsletterArticle} />
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="article__button">Subscribe</button>
      </div>
    </div>
  )
};

export default Newsletter;
