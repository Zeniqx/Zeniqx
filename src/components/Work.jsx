import React, { useState, useEffect, useRef } from 'react';
import './work.css'
import Indina from '../assets/indina.png'
import Academy from '../assets/academy.png'
import Learn from '../assets/learnhathon.png'
import Cred from '../assets/credpolis.png'
import { gsap } from 'gsap';
import './hooks/useCursor.css'
import useCursor from './hooks/useCursor';
function Work() {
  const cursorRef = useCursor();
 
  return (
    
    <div id="work" className='work' >
      {/* <div className="cursor" ref={cursorRef}></div> */}
      <div className=" " >
        <span className='heading cursor-scale '>
            Our Work
        </span>
        </div>
        <div className='cards'  >
       
        <div className='card learnhattan'>
            <div className='cardupper'>
              <span className='indina learnhattantext cursor-scale small'>
                  Learnhattan
              </span>
              <div className='list'>
                  <span className='list1'>
                    Web Development
                  </span>
                  <span className='list2'>
                    UI/UX Design
                  </span>
                  <span className='list3'>
                    Hosting
                  </span>
                  <span className='list4'>
                    Management
                  </span>
              </div>
            </div>
              <div className='cardlower'>
                  <img className="ind"  src={Learn}/>
              </div>
            </div>
            <div className='card ultimate'>
            <div className='cardupper'>
              <span className='indina ultimatetext cursor-scale small'>
                  Ultimate
              </span>
              <div className='list'>
                  <span className='list1'>
                    Web Development
                  </span>
                  <span className='list2'>
                    UI/UX Design
                  </span>
                  <span className='list3'>
                    Hosting
                  </span>
                  <span className='list4'>
                    Management
                  </span>
              </div>
            </div>
              <div className='cardlower'>
                  <img className="ind"  src={Academy}/>
              </div>
            </div>
            <div className='card'>
            <div className='cardupper'>
              <span className='indina cursor-scale small'>
                  Indina
              </span>
              <div className='list'>
                  
                  <span className='list2'>
                    UI/UX Design
                  </span>
                  
              </div>
            </div>
              <div className='cardlower'>
                  <img className="ind"  src={Indina}/>
              </div>
            </div>
            <div className='card'>
            <div className='cardupper'>
              <span className='indina cursor-scale small'>
                  CredPolis
              </span>
              <div className='list'>
                  <span className='list1'>
                    Web Development
                  </span>
                  <span className='list2'>
                    UI/UX Design
                  </span>
                  <span className='list3'>
                    Hosting
                  </span>
                  <span className='list4'>
                    Management
                  </span>
              </div>
            </div>
              <div className='cardlower'>
                  <img className="ind"  src={Cred}/>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Work
