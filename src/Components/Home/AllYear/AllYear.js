import React, { useEffect } from 'react'
import './AllYear.css'
import ScrollReveal from 'scrollreveal'

const AllYear = () => {
  useEffect(() => {
    ScrollReveal().reveal('.all-year', {
      distance: '110px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease',
      reset: true,
    });
    ScrollReveal().reveal('.all-year > *', {
      distance: '20px',
      origin: 'bottom',
      duration: 500,
      easing: 'ease',
      reset: true,
      interval: 80,
    });
  }, []);
  return (
    <div className='all-year'>
      <h1>Vítejte v naší kavárně Avantýra!</h1>
      <h2>káva, co potěší</h2>
      <p>Jsme útulné a moderní místo, kde můžete v klidu posedět a vychutnat si šálek aromatické kávy nebo dalších lahodných nápojů. Nabízíme příjemnou atmosféru ideální pro setkání s přáteli, pracovní schůzky nebo chvíle odpočinku. Naše káva je pečlivě vybíraná a připravovaná s láskou, abyste si u nás mohli vychutnat opravdový zážitek.</p>
    </div>
  )
}

export default AllYear