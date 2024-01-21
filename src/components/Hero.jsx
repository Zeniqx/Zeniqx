import React, { useEffect } from 'react';
import './Hero.css';
import Icon from '../assets/Icon.svg';
import City from '../assets/city.svg';
import './hooks/useCursor.css'
import useCursor from './hooks/useCursor';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';
import Star from '../assets/star.svg'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero5 from '../assets/hero5.svg'

const handleClick = () => {
  window.location.href = 'https://calendly.com/zeniqx/30min';
};

function Hero() {
  const cursorRef = useCursor();
  

 
  // useEffect(() => {
  //   const canvas = document.createElement('canvas');
  //   canvas.id = 'canvas3d';
  //   document.querySelector('.animation').appendChild(canvas);

  //   canvas.addEventListener('wheel', evt => evt.preventDefault());
  //   const app = new Application(canvas);
  //   app.load('https://prod.spline.design/2kzmetDC2ajrVex7/scene.splinecode');
  //   // app.load('./scene.splinecode');

  //   document.getElementById( "canvas3d" ).onmousewheel = function(event){
  //     event.preventDefault();
  // };

  //   return () => {
  //     app.dispose();
  //     canvas.removeEventListener('wheel', preventCanvasZoom);
  //     document.querySelector('.animation').removeChild(canvas);
  //   };
  // }, []);

  return (
    <>
    <div id="hero" className='hero'>

      <div className="cursor" ref={cursorRef}></div>

      <div className='content  '>
        <div className='headin'>
          <span className="animatedtext cursor-scale ">
          Your Success, Our Digital Expertise </span>
        </div>
        <div className='subheadingg'>
          <p className='subheadinggg cursor-scale small'>
            Delivering exceptional Digital solutions with seamless management expertise.
          </p>
        </div>
        <div className='cta  ' >
          <div className='ctaa cursor-scale small' onClick={handleClick}>
            {/* <img src={Icon} className='ctabutton' width={24} height={24} alt="Icon" /> */}
            <span className='ctaaa '>
              Schedule A Call
            </span>
          </div>
        </div>
      </div>
    {/* <Spline scene="https://prod.spline.design/2kzmetDC2ajrVex7/scene.splinecode" /> */}

      <div className='animation '>
      {/* <Spline scene="https://prod.spline.design/ImXDnKhH4EHagicH/scene.splinecode" /> */}
      {/* <img src={hero1}/> */}
      {/* <img src={hero2}/> */}
      {/* <img src={hero3}/> */}
      <img src={hero5}/>


      </div>
    </div>
    {/* <div className="hwrap">
    <div className="hmove">
        <span className='hitem'>Website Development</span>
        <span className='hitem'>.</span>
        <span className='hitem'> Designing</span>
        <span className='hitem'>.</span>
        <span className='hitem'> Branding</span>
        <span className='hitem'>.</span>
        <span className='hitem'>SEO</span>
        <span className='hitem'>.</span>
        <span className='hitem'>Marketing</span>
        <span className='hitem'>.</span>
    </div>
  </div> */}
  
  <div className="marquee marquee--hover-pause">
    <ul className="marquee__content">
      <li className='marqueetext'>Website Development</li>
      <li className='marqueetext'><img className='starr' src={Star}/></li>
      <li className='marqueetext'>Designing</li>
      <li className='marqueetext'><img className='starr' src={Star}/></li>
      <li className='marqueetext'>Branding</li>
      <li className='marqueetext'><img className='starr' src={Star}/></li>
      <li className='marqueetext'>SEO</li>
      <li className='marqueetext'><img className='starr' src={Star}/></li>
      <li className='marqueetext'>SMO</li>
      <li className='marqueetext'><img className='starr' src={Star}/></li>
    </ul>

    <ul aria-hidden="true" className="marquee__content">
      <li className='marqueetext'>Website Development</li>
      <li className='marqueetext'><img className='starr' src={Star}/></li>
      <li className='marqueetext'>Designing</li>
      <li className='marqueetext'><img className='starr' src={Star}/></li>
      <li className='marqueetext'>Branding</li>
      <li className='marqueetext'><img className='starr' src={Star}/></li>
      <li className='marqueetext'>SEO</li>
      <li className='marqueetext'><img className='starr' src={Star}/></li>
      <li className='marqueetext'>SMO</li>
      <li className='marqueetext'><img className='starr' src={Star}/></li>
    </ul>
  </div>
  </>
  );
}

export default Hero;
