import React from 'react'
import './Footer.css'
import logoIMG from '../../assets/logoGOLD.png'
import { Link } from 'react-router-dom'
import { Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-flex'>
        <Link to={'/'}><img src={logoIMG} alt='logo' width={150} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} /></Link>
        <ul>
          <li><Link to={'/menu'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>menu</Link></li>
          <li><Link to={'/o-nas'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>o nás</Link></li>
          <li><Link to={'/kontakt'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>kontakt</Link></li>
          <li><Link to={'https://www.instagram.com/kavarna.avantyra'} target='blank'><Instagram /></Link></li>
          <li><Link to={'https://www.facebook.com/kavarna.avantyra'} target='blank'><Facebook /></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer