import React from 'react';
import "./SubHeading.css"

import { images } from "../../constants"

const SubHeading = ({ title }) => (
  <article style={{ marginBottom: '1rem' }}>
    <p className="p--raleway">{title}</p>
    <img src={images.guitar} alt="guitar" className="subheading__image" />
  </article>
);

export default SubHeading;
