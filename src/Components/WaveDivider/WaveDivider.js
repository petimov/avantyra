import React from 'react'

const WaveDivider1 = ({ flipped = false }) => {
  return (
    <div className='wave-divider' style={{transform: flipped ? 'rotate(180deg)' : 'none',}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140">
  <path fill="#6b5b4b" fillOpacity="1" d="M0,64L120,64C240,64,480,64,720,74.7C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
</svg>
    </div>
  )
}

export default WaveDivider1