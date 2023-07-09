import React from 'react';

import { AboutUs, Owner, FindUs, Footer, Gallery, Header, Video, Laurels, Services } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <main>
    <Navbar />
    <Header />
    <AboutUs />
    <Services />
    <Owner />
    <Video />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </main>
);

export default App;
