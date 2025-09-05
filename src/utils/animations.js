import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const animatePageIn = () => {
  const banners = [
    document.getElementById('banner-1'),
    document.getElementById('banner-2'),
    document.getElementById('banner-3'),
    document.getElementById('banner-4'),
  ].filter(Boolean);

  if (!banners.length) return;

  // Reset position first
  gsap.set(banners, {
    yPercent: 0,
    autoAlpha: 1,
  });

  // Then animate
  gsap.to(banners, {
    yPercent: 100,
    stagger: 0.2,
    duration: .8,
    ease: 'power2.out',
  });

  // Scroll to top 
  window.scrollTo({ top: 0, behavior: 'smooth' })
};
export const animatePhotoAppear = () => {

  const content = document.querySelector('.content');
  if (!content) return;

  const images = content.querySelectorAll('.photo-container img');
  if (!images.length) return;

  gsap.set(images, { autoAlpha: 0, scale: 0.9 });

  gsap.to(images, {
    autoAlpha: 1,
    scale: 1,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.15,
  });
};

export const animatePhotoScroll = (section) => {
  const images = section.querySelectorAll('img');

  images.forEach((img) => {
    gsap.fromTo(
      img,
      { autoAlpha: 0.5, scale: 0.96, y: 60 },
      {
        autoAlpha: 1,
        scale: 1,
        y: -60,
        scrollTrigger: {
          trigger: img,
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: true,
        },
      }
    );
  });
};


export const animatePhotoDown = (section) => {
  const images = section.querySelectorAll('.about-text');

  images.forEach((img) => {
    gsap.fromTo(
      img,
      { y: 0 },
      {
        y: -200,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: .5,
        },
      }
    );
  });
};

export const animateHamburgerOpen = () => {
  const tl = gsap.timeline()
  tl.set('.banner', { y: '0%' })
  tl.to('.banner', {
    y: '-100%',
    duration: 0.8,
    stagger: 0.07,
    ease: 'power2.out'
  })
}

export const animateHamburgerClose = () => {
  const tl = gsap.timeline()
  tl.to('.banner', {
    y: '0%',
    duration: 0.8,
    stagger: 0.07,
    ease: 'power2.inOut'
  })
}