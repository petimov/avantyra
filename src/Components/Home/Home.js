import React, { useEffect } from 'react'
import './Home.css'
import AllYear from './AllYear/AllYear.js'
import WaveDivider from '../WaveDivider/WaveDivider.js'
import Festivals from './Festivals/Festivals.js'
import Gallery from './Gallery/Gallery.js'
import Menu from './Menu/Menu.js'
import { initScrollReveal } from '../../utils/scrollRevealInit.js'

const Home = () => {

  useEffect(() => {
    requestAnimationFrame(() => {
      initScrollReveal();
    });
  }, []);

  return (
    <div className='home'>
      <img
        className="cover-img"
        alt="cover"
        src={`${process.env.PUBLIC_URL}/images/main.webp`}  // default fallback
        srcSet={`
    ${process.env.PUBLIC_URL}/images/main-375.webp 375w,
    ${process.env.PUBLIC_URL}/images/main-750.webp 750w,
    ${process.env.PUBLIC_URL}/images/main.webp
  `}
        sizes="(max-width: 375px) 375px,
         (max-width: 750px) 750px,
         1000px"
      />
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