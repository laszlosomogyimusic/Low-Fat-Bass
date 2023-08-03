import React from 'react';
import { images } from '../../constants';
import { Article } from '../../components';


const FindUs = () => {
  let awardArticle = {
    type: "normal",
    justifyContentTo: "left",
    title:"Find Us",
    subtitle: "Contact", 
  }  
  return (
    <section className="app__bg app__wrapper app__section" id="contact">
      <div className="app__wrapper-info">
        <Article {...awardArticle} />

        <div className="app__wrapper-content">
          <p className="article__text">4 Privet Drive</p>
          <p className="article__subtitle" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className="article__text">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="article__text">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>

      </div>

      <div className="app__wrapper-figure">
        <img className="awards__image" src={images.awards} alt="awards" />
      </div>
    </section>
  )
  };

export default FindUs;
