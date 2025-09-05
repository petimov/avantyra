import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import './Gallery.css';
import Picture1 from '../../../assets/futral.webp';
import Picture2 from '../../../assets/dvatulipy.webp';
import Picture3 from '../../../assets/galleryKafe.webp';
import Picture4 from '../../../assets/kafe.webp';
import Picture5 from '../../../assets/limo.webp';
import Picture6 from '../../../assets/matcha.webp';

const Gallery = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4
    },
    {
      src: Picture2,
      scale: scale5
    },
    {
      src: Picture3,
      scale: scale6
    },
    {
      src: Picture4,
      scale: scale5
    },
    {
      src: Picture5,
      scale: scale6
    },
    {
      src: Picture6,
      scale: scale8
    }
  ]

  return (
    <div className="container" ref={container}>
      <div>
        {
          pictures.map(({ src, scale }, index) => {
            return <motion.div key={index} style={{ scale }}>
              <div>
                <img
                  src={src}
                  fill
                  alt="image"
                  placeholder='blur'
                />
              </div>
            </motion.div>
          })
        }
      </div>
    </div>
  );
}
export default Gallery;
