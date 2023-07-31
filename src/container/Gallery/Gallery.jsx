import React from 'react';

import { images } from "../../constants"
import { Article } from '../../components';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };


  let galleryArticle = {
    type: "normal",
    justifyContentTo: "left",
    title:"Photo Gallery",
    subtitle: "Instagram", 
    text: "Please see few stunning pictures from our instagram",
    buttonText: "View more"
  }  
  return (
    <section className="gallery app__flex--center" id="gallery">
      <div className="gallery__content">
        <Article {...galleryArticle} />
      </div>

      <div className="gallery__images">
        <div className="gallery__images-container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="gallery__images-card app__flex--center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>


    </section>
  );
}

export default Gallery;
