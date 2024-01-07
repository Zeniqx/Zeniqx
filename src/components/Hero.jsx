import React, { useEffect } from 'react';
import './Hero.css';
import Icon from '../assets/Icon.svg';
import './hooks/useCursor.css'
import useCursor from './hooks/useCursor';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';
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
    <div id="hero" className='hero'>
      <div className="cursor" ref={cursorRef}></div>


      <div className='content  '>
        <div className='headin'>
          <span className="animatedtext cursor-scale ">
            Craft </span><span className='presence cursor-scale '>Your Presence </span>
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

      <div className='animation cursor-scale small'>
      <Spline scene="https://prod.spline.design/2kzmetDC2ajrVex7/scene.splinecode" />
      {/* <video src={CubeVideo}/> */}
      </div>
    </div>
  );
}

export default Hero;
