import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link, useLocation } from 'react-router-dom'
import logoIMG from '../../assets/logo.png'
import ScrollReveal from 'scrollreveal'
import { Menu, X } from 'lucide-react'
import { animateHamburgerOpen, animateHamburgerClose } from '../../utils/animations.js'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const location = useLocation();

  // Check if current route is home
  const isHome = location.pathname === '/';

  useEffect(() => {
    const body = document.body;

    if (menuOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      body.style.overflow = '';
      body.style.paddingRight = '';
    }

    return () => {
      body.style.overflow = '';
      body.style.paddingRight = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (window.innerWidth > 800) {
      const scrollRevealOption = {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        easing: 'ease',
        delay: 850,
      }

      ScrollReveal().reveal(".hover-link-left", {
        ...scrollRevealOption,
        delay: 800,
        origin: 'left',
      })

      ScrollReveal().reveal(".hover-link-right", {
        ...scrollRevealOption,
        delay: 800,
        origin: 'right',
      })

      ScrollReveal().reveal(".hover-img", {
        ...scrollRevealOption,
        delay: 1500,
      })
    }
  }, [])

  const handleHamburgerClick = () => {
    if (!menuOpen) {
      animateHamburgerOpen()
      setMenuOpen(true)
    } else {
      setIsAnimating(true)
      animateHamburgerClose()

      setTimeout(() => {
        setMenuOpen(false)
        setIsAnimating(false)
      }, 300)
    }
  }

  const handleLinkClick = () => {
    animateHamburgerClose();
    setMenuOpen(false);
  }

  return (
    <div className='nav'>
      <div className="nav-header">
        <Link to={'/'} className='hover-img'>
          <img src={logoIMG} alt='Avantyra' />
        </Link>

        {window.innerWidth <= 800 && (
          <button className="hamburger" onClick={handleHamburgerClick} disabled={isAnimating} style={{ color: menuOpen ? '#FFFAFA' : 'inherit' }}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : isAnimating ? 'closing' : ''}`}>
        <li className={isHome ? 'hidden-text' : ''}>
          <Link to={'/'} className='hover-link hover-link-left' onClick={handleLinkClick}>
            <span>d</span><span>o</span><span>m</span><span>ů</span>
          </Link>
        </li>
        <li>
          <Link to={'/menu'} className='hover-link hover-link-left' onClick={handleLinkClick} >
            <span>m</span><span>e</span><span>n</span><span>u</span>
          </Link>
        </li>
        <li>
          <Link to={'/o-nas'} className='hover-link hover-link-left' onClick={handleLinkClick}>
            <span>o</span><span>&nbsp;</span><span>n</span><span>á</span><span>s</span>
          </Link>
        </li>
        <li className='mobile-logo'>
          <Link to={'/'} className='hover-img' onClick={handleLinkClick}>
            <img src={logoIMG} alt='Avantyra' />
          </Link>
        </li>
        <li>
          <Link to={'/kontakt'} className='hover-link hover-link-right' onClick={handleLinkClick}>
            <span>k</span><span>o</span><span>n</span><span>t</span><span>a</span><span>k</span><span>t</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
