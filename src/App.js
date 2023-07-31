import React from 'react';

import { AboutUs, Owner, FindUs, Footer, Gallery, Header, Video, Awards, Services } from './container';
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
    <Awards />
    <Gallery />
    <FindUs />
    <Footer />
  </main>
);

export default App;
