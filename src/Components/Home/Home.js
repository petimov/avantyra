import React, { useEffect } from 'react'
import './Home.css'
import AllYear from './AllYear/AllYear'
import WaveDivider from '../WaveDivider/WaveDivider'
import Festivals from './Festivals/Festivals'
import Gallery from './Gallery/Gallery'
import Menu from './Menu/Menu'
import { initScrollReveal } from '../../utils/scrollRevealInit'

const Home = () => {

useEffect(() => {
  requestAnimationFrame(() => {
    initScrollReveal();
  });
}, []);

  return (
    <div className='home'>
        <img className='cover-img' alt='cover' src={`${process.env.PUBLIC_URL}/images/main.webp` }/>
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