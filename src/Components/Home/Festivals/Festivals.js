import React, { useEffect } from 'react'
import './Festivals.css'
import ScrollReveal from 'scrollreveal'
import festIMG from '../../../assets/futral.webp'

const Festivals = () => {
   useEffect(() => {
    ScrollReveal().reveal('.festival-text', {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease',
      reset: true,
    });
  }, []);
  return (
    <div className='festivals'>
      <img src={festIMG} className='festivals-image' alt='akce v Avantyre' loading="lazy"/>
      <div className='festival-text'>
        <h1>Akce</h1>
        <p>V kavárně se nám také pravidelně konají různé akce a workshopy.</p>
      </div>
    </div>
  )
}

export default Festivals