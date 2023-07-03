import React from 'react'
import "./Article.css"

import  { images } from "../../constants/"

var articleClassName = "";


const HorizontalDrumstick = ({ doRotateImage = false }) => {
  return (
    <img 
      className = {`article__image ${doRotateImage ? "article__image--rotated" : ""}`} 
      src = {images.drumstickHorizontal} 
      alt = "drumstick horizontal"  
    />
  )
}

const Paragraph = (props) => {
  return (
    <>
    { props.textStyle ? (
      <p className={props.pClassName} style={props.textStyle}>{props.text}</p>
    ) : (
      <p className={props.pClassName}>{props.text}</p>
    )}
    </>
  )
}

const Subtitle = (props) => {
  return (
    <>
    { props.subtitleStyle ? (
      <p className={props.pClassName} style={props.subtitleStyle}>{props.subtitle}</p>
    ) : (
      <p className={props.pClassName}>{props.subtitle}</p>
    )}
    </>
  )
}

const Title = (props) => {
  return (
    <>
    { props.titleStyle ? (
      <h1 className={props.titleClassName} style={props.titleStyle}>{props.title}</h1>
    ) : (
      <h1 className={props.titleClassName}>{props.title}</h1>
    )}
    </>
  )
}

const justifyContent = (props) => {
  switch(props.justifyContentTo) {
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

const renderWithSubtitle = (props) => {
  return (
    <div>
      <Subtitle 
        pClassName="article__subtitle" 
        {...props}
      />            
      <HorizontalDrumstick
        doRotateImage = {props.justifyContentTo === "left" ? false : true} 
      />
      <Title 
        titleClassName="article__title"
        {...props}
      />
    </div>
  );
}

const renderWithoutSubtitle = (props) => {
  return (
    <div>
      <Title 
        titleClassName="article__title"
        {...props}
      />
      <HorizontalDrumstick
        doRotateImage = {props.justifyContentTo === "left" ? false : true} 
      />
    </div>
  );
}

const Article = (props) => {
  justifyContent(props);
  return (
    <article className={articleClassName}>
      { props.subtitle ? renderWithSubtitle(props) : renderWithoutSubtitle(props)}
      { props.text && (
        <Paragraph 
          pClassName="article__text"
          {...props}
        />
      )}

      { props.buttonText && (
        <button type="button" className="article__button">{props.buttonText}</button>
      )}      
    </article>
  )
}

export default Article