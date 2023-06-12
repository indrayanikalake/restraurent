import React from 'react';

import { AboutUs,  FindUs,  Gallery, Header, Intro,  SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Gallery />
    <Intro />
    <FindUs />
  </div>
);

export default App;
