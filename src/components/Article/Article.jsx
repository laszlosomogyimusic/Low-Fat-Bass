import React from 'react'
import "./Article.css"

import  { images, article } from "../../constants/"

const HorizontalDrumstick = ({ doRotateImage = false }) => {
  return (
    <img 
      className = {`article__image ${doRotateImage ? "article__image--rotated" : ""}`} 
      src = {images.drumstickHorizontal} 
      alt = "drumstick horizontal"  
    />
  )
}

const Article = ({title, text = "", isTextColorGrey=false, subtitle = "", side = article.leftSide, buttonText = "" }) => {
  return (
    <article className="article">
      { subtitle ? (
          <div>
            <p className="article__subtitle">{subtitle}</p>
            <HorizontalDrumstick
              doRotateImage = {side === "left" ? false : true} 
            />
            <h1 className="article__title">{title}</h1>
          </div>
          )
        : (
            <div>
              <h1 className="article__title">{title}</h1>
              <HorizontalDrumstick
                doRotateImage = {side === article.leftSide ? false : true} 
              />
            </div>
        )
      }
      { text && (
        <p 
          className={`article__text ${isTextColorGrey ? "article__text--grey" : ""}`}>{text}</p>
      )}

      { buttonText && (
        <button type="button" className="article__button">{buttonText}</button>
      )}      
    </article>
  )
}

export default Article