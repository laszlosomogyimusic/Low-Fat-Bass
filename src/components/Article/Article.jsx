import React from 'react'
import "./Article.css"

import  { images } from "../../constants/"

var data = "";
var articleClassName = "";


const justifyContent = () => {
  switch(data.justifyContentTo) {
    case "left":
      articleClassName += "article article--justifyleft"  
    break;
    case "right":
      articleClassName += "article article--justifyright" 
    break;
    case "center":
      articleClassName += "article article--justifycenter"
    break;
    default:
      articleClassName += "article article--justifyleft"  
    break;
  }  
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

const Paragraph = ({ pText, pClassName, pStyle}) => {
  return (
    <>
    { pStyle ? (
      <p className={pClassName} style={pStyle}>{pText}</p>
    ) : (
      <p className={pClassName}>{pText}</p>
    )}
    </>
  )
}

const H1 = ({ h1Text, h1ClassName, h1Style}) => {
  return (
    <>
    { h1Style ? (
      <h1 className={h1ClassName} style={h1Style}>{h1Text}</h1>
    ) : (
      <h1 className={h1ClassName}>{h1Text}</h1>
    )}
    </>
  )
}

const renderWithSubtitle = () => {
  return (
    <div>
      <Paragraph 
        pClassName="article__subtitle" 
        pStyle={data.subtitleStyle}
        pText={data.subtitle} 
      />            
      <HorizontalDrumstick
        doRotateImage = {data.justifyContentTo === "left" ? false : true} 
      />
      <H1 
        h1ClassName="article__title"
        h1Text = {data.title}
        h1Style = {data.titleStyle}
      />
    </div>
  );
}

const renderWithoutSubtitle = () => {
  return (
    <div>
      <H1 
        h1ClassName="article__title"
        h1Text = {data.title}
        h1Style = {data.titleStyle}
      />
      <HorizontalDrumstick
        doRotateImage = {data.justifyContentTo === "left" ? false : true} 
      />
    </div>
  );
}

// const Article = ({title = "", titleStyle = "", text = "", textStyle = "", subtitle = "", subtitleStyle= "", justifyContentTo = "", buttonText = "" }) => {
const Article = (props) => {
  data = props;
  justifyContent();
  return (
    <article className={articleClassName}>
      { data.subtitle ? renderWithSubtitle() : renderWithoutSubtitle()
      }
      { data.text && (
        <Paragraph 
          pClassName="article__text"
          pStyle={data.textStyle}
          pText={data.text} 
        />
      )}

      { data.buttonText && (
        <button type="button" className="article__button">{data.buttonText}</button>
      )}      
    </article>
  )
}

export default Article