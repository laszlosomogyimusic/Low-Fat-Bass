import React from 'react'
import './ServiceItem.css';

const ServiceItem = ({ title, price, tags }) => {
  return (
    <article className="serviceitem">
      <header className="serviceitem__header">
        <div className="serviceitem__title">
          <p className="app__paragraph" style={{ color: '#ddb771ff' }}>{title}</p>
        </div>
        <div className="serviceitem__dash" />
        <div className="serviceitem__price">
          <p className="app__paragraph">{price}</p>
        </div>
      </header>

      <div className="serviceitem__tags">
        <p className="app__paragraph" style={{ color: '#AAAAAA' }}>{tags}</p>
      </div>
  </article>
  )
}

export default ServiceItem