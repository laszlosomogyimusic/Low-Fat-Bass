import React from 'react'
import  { images, article } from "../../constants/"

const Article = ({title, text, subtitle, hasSubtitle=article.hasSubtitle, side = article.leftSide, hasButton = article.hasButton, buttonText }) => {
  return (
    <article className="article">
      { hasSubtitle ? 
         (
            <div>
              <p className="app__subheader">{subtitle}</p>
              <img src={images.drumstickHorizontal} alt="drumstick" className="app__image" />
            </div>
          )
        : (
          <div>
            <p className="app__subheader">{subtitle}</p>
            <img src={images.drumstickHorizontal} alt="drumstick" className="app__image" />
          </div>
        )}

      <h1 className="article__title">{title}</h1>
      <img className="article__image" src={images.drumstickHorizontal} alt="drumstick horizontal" />
      <p className="article__text">{text}</p>
      { hasButton && (
        <button type="button" className="article__button">{buttonText}</button>
      )}

      
    </article>
  )
}

export default Article