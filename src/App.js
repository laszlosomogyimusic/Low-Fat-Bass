import React from 'react';

import { AboutUs, Owner, FindUs, Footer, Gallery, Header, Intro, Laurels, Services } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <main>
    <Navbar />
    <Header />
    <AboutUs />
    <Services />
    <Owner />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </main>
);

export default App;
