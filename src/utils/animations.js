import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


export const animatePageIn = () => {
  const bannerOne = document.getElementById('banner-1');
  const bannerTwo = document.getElementById('banner-2');
  const bannerThree = document.getElementById('banner-3');
  const bannerFour = document.getElementById('banner-4');

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.2,
    });
  }

   gsap.to(window, {
    duration: 2,
    scrollTo: { y: 0 },
    ease: 'power2.inOut',
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

export const animatePhotoAppear = () => {
  const content = document.querySelector('.content');
  if (!content) return;

  const images = content.querySelectorAll('.photo-container img');

  gsap.set(images, { autoAlpha: 0, scale: 0.9 });

  gsap.to(images, {
    autoAlpha: 1,
    scale: 1,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.15,
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