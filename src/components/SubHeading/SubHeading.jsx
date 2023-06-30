import React from 'react';
import "./SubHeading.css"

import { images } from "../../constants"

const SubHeading = ({ title }) => (
  <article style={{ marginBottom: '1rem' }}>
    <p className="app__subheader">{title}</p>
    <img src={images.drumstickHorizontal} alt="drumstick" className="app__image" />
  </article>
);

export default SubHeading;
