import React from 'react'
import "./Article.css"

import  { images } from "../../constants/"

const HorizontalDrumstick = ({ doRotateImage = false }) => {
  return (
    <img 
      className = {`article__image ${doRotateImage ? "article__image--rotated" : ""}`} 
      src = {images.drumstickHorizontal} 
      alt = "drumstick horizontal"  
    />
  )
}

const Article = ({title, text = "", isTextColorGrey=false, subtitle = "", justifyContentTo = "", buttonText = "" }) => {
  let articleClassName = "";
  switch(justifyContentTo) {
    case "left":
      articleClassName = "article article--justifyleft"
    break;
    case "right":
      articleClassName = "article article--justifyright"
    break;
    case "center":
      articleClassName = "article article--justifycenter"
    break;
    default:
      articleClassName = "article article--justifyleft"
    break;
  }
  
  return (
    <article className={articleClassName}>
      { subtitle ? (
          <div>
            <p className="article__subtitle">{subtitle}</p>
            <HorizontalDrumstick
              doRotateImage = {justifyContentTo === "left" ? false : true} 
            />
            <h1 className="article__title">{title}</h1>
          </div>
          )
        : (
            <div>
              <h1 className="article__title">{title}</h1>
              <HorizontalDrumstick
                doRotateImage = {justifyContentTo === "left" ? false : true} 
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