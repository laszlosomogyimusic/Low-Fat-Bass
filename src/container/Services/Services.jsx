import React from 'react'
import { data, images } from '../../constants';
import { ServiceItem, Article } from '../../components';
import './Services.css';

const Services = () => {
  let servicesArticle = {
    type: "normal",
    justifyContentTo: "center",
    title: "Please select from the list",
    subtitle: "Our Services for You"
  }

  return (
    <section className="services app__flex--center app__section" id="services">
      <Article {...servicesArticle} />

      <section className="services__content">
        <section className="services__studiowork app__flex--center">
          <p className="services__heading">Studio work</p>
          <div className="services__list">
            {data.studioworks.map((studiowork, index) => (
              <ServiceItem key={studiowork.title + index} title={studiowork.title} price={studiowork.price} tags={studiowork.tags} />
            ))}
          </div>
        </section>

        <figure className="services__bassguitar">
          <img className="services__bassguitar-image" src={images.bassGuitar} alt="bass guitar" />
        </figure>

        <section className="services__musician  app__flex--center">
          <p className="services__heading">Session Musician</p>
          <div className="services__list">
            {data.musicianworks.map((musicianwork, index) => (
              <ServiceItem key={musicianwork.title + index} title={musicianwork.title} price={musicianwork.price} tags={musicianwork.tags} />
            ))}
          </div>
        </section>
      </section>  
      
      <div style={{ marginTop: 15 }}>
        <button type="button" className="app__button">View More</button>
      </div>    
    </section>
  )
}

export default Services
