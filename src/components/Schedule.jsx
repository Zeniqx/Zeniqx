import React, { useEffect, useRef } from 'react'
import './schedule.css'
import './hooks/useCursor.css'
import useCursor from './hooks/useCursor';
import Icon from '../assets/Icon.svg';
import { gsap } from 'gsap';
import cube from '../assets/cubes.png'

const handleClick = () => {
  window.location.href = 'https://calendly.com/zeniqx/30min';
};
function Schedule() {
  const cursorRef = useCursor();

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
            { opacity: 1, y: 0, stagger: 0.25, duration: 1 }
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
    <div ref={sectionRef}  id="schedule" className='schedule' >

        <span className='workkk cursor-scale '> <span className="worktexttt">Work </span> With Us</span>
        <span className='workkksubtext'>Feel free to schedule a call with us at your convenience, and our team will reach out to you soon.
</span>
        <div className='cta ' onClick={handleClick}>
          <div className='ctaa cursor-scale small'>
            {/* <img src={Icon} className='ctabutton' width={24} height={24} alt="Icon" /> */}
            <span className='ctaaa '>
              Schedule A Call
            </span>
          </div>
        </div>
    </div>
  )
}

export default Schedule
