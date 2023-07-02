import React from 'react'
import "./Article.css"

import  { images } from "../../constants/"

let articleClassName = "article";
let titleClassName = "article__title";
let subtitleClassName = "article__subtitle";
let textClassName = "article__text";

const initClassNames = (titleModifierClass, subtitleModifierClass, textModifierClass, justifyContentTo) => {
  console.log("initClassNames: " + textClassName);
  switch(justifyContentTo) {
    case "left":
      articleClassName += " article--justifyleft"   //make sure there is a leading space in the string
    break;
    case "right":
      articleClassName += " article--justifyright"  //make sure there is a leading space in the string
    break;
    case "center":
      articleClassName += " article--justifycenter" //make sure there is a leading space in the string
    break;
    default:
      articleClassName += " article--justifyleft"   //make sure there is a leading space in the string
    break;
  }

  titleClassName += titleModifierClass ? ` ${titleModifierClass}` : "";           //make sure there is a leading space in the string
  subtitleClassName += subtitleModifierClass ? ` ${subtitleModifierClass}` : "";  //make sure there is a leading space in the string
  textClassName += textModifierClass ? ` ${textModifierClass}` : "";              //make sure there is a leading space in the string

}

const HorizontalDrumstick = ({ doRotateImage = false }) => {
  return (
    <img 
      className = {`article__image ${doRotateImage ? "article__image--rotated" : ""}`} 
      src = {images.drumstickHorizontal} 
      alt = "drumstick horizontal"  
    />
  )
}

const Article = ({title = "", titleModifierClass = "", text = "", textModifierClass = "", isTextColorGrey=false, subtitle = "", subtitleModifierClass= "", justifyContentTo = "", buttonText = "" }) => {
  initClassNames(titleModifierClass, subtitleModifierClass, textModifierClass, justifyContentTo);
  console.log("Article: " + textClassName);

  return (
    <article className={articleClassName}>
      { subtitle ? (
          <div>
            <p className={subtitleClassName}>{subtitle}</p>
            <HorizontalDrumstick
              doRotateImage = {justifyContentTo === "left" ? false : true} 
            />
            <h1 className={titleClassName}>{title}</h1>
          </div>
          )
        : (
            <div>
              <h1 className={titleClassName}>{title}</h1>
              <HorizontalDrumstick
                doRotateImage = {justifyContentTo === "left" ? false : true} 
              />
            </div>
        )
      }
      { text && (
        <p 
          className={textClassName}>{text}</p>
      )}

      { buttonText && (
        <button type="button" className="article__button">{buttonText}</button>
      )}      
    </article>
  )
}

export default Article