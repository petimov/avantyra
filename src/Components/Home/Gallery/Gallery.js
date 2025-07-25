import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';
import galleryCafe from '../../../assets/galleryKafe.webp'
import contact from '../../../assets/contact.webp'
import venek from '../../../assets/venek.webp'
import tulipan from '../../../assets/tulipan.webp'
import kocour from '../../../assets/kocour.webp'
import dvatulipy from '../../../assets/dvatulipy.webp'

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const mosaicRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mosaicRef.current,
        { scale: 3,y: 0 },
        {
          scale: 1,
          y: -200,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mosaicRef.current,
            start: 'center-=540 top',
            end: '+=400',
            scrub: true,
            pin: true,
          },
        }
      );
    }, mosaicRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="zoom-scroll-wrapper">
      <div className="mosaic" ref={mosaicRef}>
        <img src={galleryCafe} className="item item1" alt="cover 1" />
        <img src={contact} className="item item2" alt="cover 2" />
        <img src={venek} className="item item3" alt="cover 3" />
        <img src={tulipan} className="item item4" alt="cover 4" />
        <img src={`${process.env.PUBLIC_URL}/images/photo2.webp`} className="item item5" alt="cover 5" />
        <img src={kocour} className="item item6" alt="cover 6" />
        <img src={dvatulipy} className="item item7" alt="cover 7" />
      </div>
    </div>
  );
};

export default Gallery;
