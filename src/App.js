import React, { useState } from 'react';

import Nav from './components/Nav'
import Carousel from './components/Carousel'
import Gallery from './components/Gallery'
import Map from './components/Map'
import Footer from './components/Footer'

import './App.scss';

export default function App() {

  const [mobileScreen, setMobileScreen] = useState(window.innerWidth <= 700 ? true : false)

  window.onresize = function () {
    (() => {
      if (window.innerWidth <= 700 && mobileScreen === false) {
        setMobileScreen(true)
        console.log(mobileScreen)
        console.log('aaaaa' + window.innerWidth)
      } else if (window.innerWidth > 700 && mobileScreen) {
        setMobileScreen(false)
        console.log(mobileScreen)
        console.log(window.innerWidth + 'aaaaa')
      }
    })()
  }


  return (
    <div className="App">
      <Nav mobileScreen={mobileScreen} />
      <Carousel mobileScreen={mobileScreen} />
      <Gallery />
      <Map />
      <Footer />
    </div>
  );
}