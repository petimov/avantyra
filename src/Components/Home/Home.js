import React, { useEffect } from 'react'
import './Home.css'
import ScrollReveal from 'scrollreveal'
import AllYear from './AllYear/AllYear'
import WaveDivider from '../WaveDivider/WaveDivider'
import Festivals from './Festivals/Festivals'
import Gallery from './Gallery/Gallery'
import Menu from './Menu/Menu'

const Home = () => {

   useEffect(() => {
  const scrollRevealOption = {
    distance: "150px",
    origin: "bottom",
    duration: 1000,
    easing: "ease",
  };

  ScrollReveal().reveal(".cover-img", scrollRevealOption);
}, []);

  return (
    <div className='home'>
        <img className='cover-img' alt='cover' src={`${process.env.PUBLIC_URL}/images/main.webp` } />
        <AllYear />
        <WaveDivider flipped />
        <Gallery />
        <WaveDivider />
        <Festivals />
        <Menu />
    </div>
  )
}

export default Home