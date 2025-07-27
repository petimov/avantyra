import React, { useRef, useEffect } from 'react'
import './About.css'
import { animatePhotoDown } from '../../utils/animations';
import ScrollReveal from 'scrollreveal'
import aboutHero from '../../assets/aboutHero.webp'
import kafe from '../../assets/kafe.webp'
import mourek from '../../assets/mourek.webp'
import { initScrollReveal } from '../../utils/scrollRevealInit';

const About = () => {
   const sectionRef = useRef(null);

useEffect(() => {
  requestAnimationFrame(() => {
    initScrollReveal();
  });
}, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      animatePhotoDown(sectionRef.current);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    animatePhotoDown(sectionRef.current);
  }, []);
  return (
    <div className='about' ref={sectionRef}>
      <div className='about-hero'>
          <img src={aboutHero} alt={'hero image'} className='about-img' />
      </div>
      <div className='about-text'>
        <p>Kavárna Avantýra se nachází v malebném městečku Železný Brod, známém svou sklářskou tradicí a krásnou přírodou. Najdete nás kousek od řeky Jizery a historického centra. Jsme ideálním místem k odpočinku po procházce městem. Nabízíme výběrovou kávu z domácí pražírny APe Křížany, dezerty, limonády a příjemnou atmosféru s výhledem na okolí.</p>
      </div>
      <div className='about-us-gallery'>
        <img src={kafe} alt='kafe'/>
        <img src={mourek} alt='mourek'/>
        <img src={`${process.env.PUBLIC_URL}/images/main.webp` } alt='kafe'/>
      </div>
      <div className='about-text'>
        <p>Naše kavárna byla první kavárnou v Železném Brodě a jsme ve funkci již více než 7 let. Nacházíme se hned vedle památkové rezervace Trávníky. Kavárna je přes léto otevřena každý den od 11 do 20 hodin, s celoroční stálejší otevírací dobou 11 až 18 hodin. Nabízíme příjemné a klidné venkovní posezení v klidné části Železného Brodu u řeky Jizery.</p>
      </div>
      <div className='about-text'>
        <h6>a co více?</h6>
        <p>Pokud spěcháte, rádi Vám kávu či něco jiného připravíme s sebou. Zahrádka je bez obsluhy, je tedy potřeba si přijít objednat na bar. Objednávku samotnou ale rádi přineseme až ke stolu. Pokud doma nemáte mlýnek, nelamte si hlavu, kávu Vám rádi nameleme.</p>
      </div>
    </div>
  )
}

export default About