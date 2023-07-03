import React from 'react'
import { data, images } from '../../constants';
import { ServiceItem, Article } from '../../components';
import './Services.css';

const Services = () => {
  let servicesArticle = {
    justifyContentTo: "center",
    title: "Please select from the list",
    subtitle: "Our Services for You"
  }

  return (
    <section className="services app__flex--center app__section" id="services">
      <Article {...servicesArticle} />

      <section className="services__options">
        <div className="app__specialMenu-menu_wine  app__flex--center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <ServiceItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <figure className="services__bassguitar">
          <img className="services__bassguitar-image" src={images.bassGuitar} alt="bass guitar" />
        </figure>

        <div className="app__specialMenu-menu_cocktails  app__flex--center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <ServiceItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </section>      
    </section>
  )
}

export default Services
