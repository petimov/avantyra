import React, { useEffect } from 'react'
import './Menu.css'
import kavaIMG from '../../../assets/kafe.webp'
import zakusekIMG from '../../../assets/zakusek.webp'
import ScrollReveal from 'scrollreveal'

const Menu = () => {
   useEffect(() => {
    ScrollReveal().reveal('.menu-text', {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease',
      reset: true,
    });
  }, []);
  return (
    <div className='menu'>
      <div className='menu-flex'>
          <img src={kavaIMG} className='menu-image' alt='kafe' loading="lazy"/>
        <div className='menu-text'>
          <h3>nejen kafe</h3>
          <h4>káva, limonády, horká čokoláda, víno ...</h4>
        <p> Naše nabídka nápojů je široká a jistě vám uspokojí všechny chuťové pohárky. Připravujeme kávu z kvalitních zrn pražírny APe Křížany, jejichž aromatická chuť vás příjemně naladí na celý den. Kromě toho tu najdete i široký výběr ledových káv, osvěžujících limonád, vína a dalších specialit.</p>
        </div>
      </div>
      <div className='menu-flex'>
          <img src={zakusekIMG} className='menu-image' alt='zakusek' loading="lazy"/>
        <div className='menu-text'>
          <h3>zákusky</h3>
          <h4>Dorty, zákusky, zmrzlina</h4>
        <p>Pro ty, kteří by chtěli něco na zub, máme také širokou škálu dezertů i zákusků.</p>
        </div>
      </div>
    </div>
  )
}

export default Menu