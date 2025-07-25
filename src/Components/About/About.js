import React, { useRef, useEffect } from 'react'
import './About.css'
import { animatePhotoDown } from '../../utils/animations';
import aboutHero from '../../assets/aboutHero.webp'
import kafe from '../../assets/kafe.webp'
import mourek from '../../assets/mourek.webp'

const About = () => {
   const sectionRef = useRef(null);

  useEffect(() => {
    animatePhotoDown(sectionRef.current);
  }, []);
  return (
    <div className='about' ref={sectionRef}>
      <div className='about-hero'>
          <img src={aboutHero} alt={'hero image'} />
      </div>
      <div className='about-text'>
        <p>Kavárna Avantýra se nachází v malebném městečku Železný Brod, známém svou sklářskou tradicí a krásnou přírodou. Najdete nás kousek od řeky Jizery a historického centra, obklopeni galeriemi, dílnami a klidnými stezkami. Jsme ideálním místem k odpočinku po procházce městem. Nabízíme výběrovou kávu, domácí dezerty a příjemnou atmosféru s výhledem na okolní krajinu.</p>
      </div>
      <div className='about-us-gallery'>
        <img src={kafe} alt='kafe'/>
        <img src={mourek} alt='mourek'/>
        <img src={`${process.env.PUBLIC_URL}/images/main.webp` } alt='kafe'/>
      </div>
      <div className='about-text'>
        <p>Kavárna Avantýra sídlí v historickém centru Železného Brodu, města proslulého tradiční výrobou skla a malebnou krajinou Českého ráje. Nacházíme se nedaleko Muzea skla, četných galerií a nábřeží řeky Jizery. Hostům nabízíme výběrovou kávu, domácí dezerty a komfortní posezení po návštěvě místních dílen, stezek či vyhlídkových věží. Interiér kombinuje moderní design s drobnými odkazy na sklářskou historii města.</p>
      </div>
      <div className='about-text'>
        <h6>a co více?</h6>
        <p>Jde architektonicky čistý prostor v srdci Železného Brodu, města proslulého sklářskou tradicí a malebnou přírodou Českého ráje. Pouhých pár kroků od Muzea skla, řeky Jizery a místních galerií vás přivítá aroma čerstvě pražené kávy z pečlivě vybraných zrn. K dokonalému zážitku přidáváme domácí dezerty, lehká sendviče a výběr čajů. Interiér spojuje moderní minimalismus s jemnými sklářskými akcenty, ideálními pro práci, setkání i relaxaci.</p>
      </div>
    </div>
  )
}

export default About