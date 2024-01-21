import React, { useEffect, useRef } from 'react'
import './section.css';
import Circles from '../assets/circles.svg';
import './hooks/useCursor.css'
import useCursor from './hooks/useCursor';
import { gsap } from 'gsap';
import why1 from '../assets/why1.jpg';
import why2 from '../assets/why2.svg';
import why3 from '../assets/why3.jpg';
import why4 from '../assets/why4.svg';
import why5 from '../assets/why5.jpeg';
import why6 from '../assets/why6.jpg';
import why7 from '../assets/why7.jpg';

function Section() {
  const cursorRef = useCursor();
  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.from(".about span", 1.8, {
  //     y: 100,
  //     ease: "power4.out",
  //     delay: 1,
  //     skewY: 7,
  //     stagger: {
  //       amount: 0.3
  //     }
  //   });
  // }, []);

 
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    let animationPlayed = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationPlayed) {
          tl.fromTo(
            entry.target,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, stagger: 0.25, duration: 2 }
          );
          animationPlayed = true;
        }
      });
    }, { threshold: 0 }); // Change threshold as needed

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      tl.kill(); // Kills the animation when the component is unmounted
    };
  }, []);


  return (
    <div ref={sectionRef} className='about'>
      {/* <div className="cursor" ref={cursorRef}></div> */}
      <span className='why cursor-scale'>
      Why Choose Us?
      </span>
      <div className='abouutt'>
        <div className='imag'>

        {/* <img src={Circles} className="image" /> */}
        {/* <img src={why1} className="image" /> */}
        {/* <img src={why2} className="image" /> */}
        {/* <img src={why3} className="image" /> */}
        {/* <img src={why4} className="image" /> */}
        {/* <img src={why5} className="image" /> */}
        {/* <img src={why6} className="image" /> */}
        <img src={why7} className="image" />





        </div>

        <div className='ab '>
          <span className='abb cursor-scale small '>
          We're more than brand builders we're architects of a robust presence designed to position your business at the pinnacle of success.
          Delivering<span className='delivering'> exceptional web design </span> and development solutions with seamless management expertise.
          </span>
          <span className='abbb cursor-scale small'>
Our team is not just equipped, we are adept at crafting your online presence with a unique touch of creativity, leveraging the latest and most effective technologies. Our mission is to continuously refine and adapt strategies to keep your business ahead in the ever-evolving digital sphere.
Choose us for a partnership that goes beyond building a brand. We architect a lasting digital legacy for your business.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Section
