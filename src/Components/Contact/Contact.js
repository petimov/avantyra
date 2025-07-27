import React from 'react'
import './Contact.css'
import ContactIMG from '../../assets/contact.webp'
import brod from '../../assets/brod.webp'

const Contact = () => {
  return (
    <div className='contact-wrapper'>
        <div className='contact'>
            <div className='phone'>
                <h5>Telefon</h5>
                <p>Lenka Šrýtrová (majitelka)</p>
                <a href='tel:+420606223962'>606 223 962</a>
            </div>
            <div className='mail'>
                <h5>email</h5>
                <p>napište nám email</p>
                <a href="mailto:kavarna.avantyra@seznam.cz">kavarna.avantyra@seznam.cz</a>
            </div>
        </div>
        <div className='location'>
            <img src={ContactIMG} className='contact-image' alt='akce v Avantyre'/>
            <div className='contact-text'>
                <h1>Avantýra</h1>
                <p>nábř. Obránců míru 134</p>
                <p>Železný Brod</p>
            </div>
        </div>
        <img src={brod} className='brod' alt='zel brod'/>
    </div>
  )
}

export default Contact