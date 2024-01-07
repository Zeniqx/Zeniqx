// import React,{useState,useRef} from 'react'
// import './services.css'
// function Services() {
//   const [cardsLeftPosition, setCardsLeftPosition] = useState(0);
//   const animationRef = useRef();
//   const revealSpeed = 2; // Adjust the speed of revealing
//   const stopDelay = 200; // Delay in milliseconds before stopping the animation

//   const handleCardListHover = (direction) => {
//     const cardWidth = 500; // Replace with the actual width of your cards
//     const maxMove = 300; // Maximum movement on both sides

//     const updatePosition = () => {
//       setCardsLeftPosition((prevPosition) => {
//         if (direction === 'right') {
//           return Math.max(prevPosition - revealSpeed, -maxMove - (cardWidth * (6 - 3)));
//         } else {
//           return Math.min(prevPosition + revealSpeed, maxMove);
//         }
//       });

//       animationRef.current = requestAnimationFrame(updatePosition);
//     };

//     animationRef.current = requestAnimationFrame(updatePosition);
//   };

//   const stopAnimation = () => {
//     setTimeout(() => {
//       cancelAnimationFrame(animationRef.current);
//     }, stopDelay);
//   };

//   return (
//     <div className='services'>
//       <span className='heading'>
//         Services
//       </span>
//       <div
//       className="card-list"
//       onMouseEnter={(e) => handleCardListHover(e.clientX > window.innerWidth / 2 ? 'right' : 'left')}
//       onMouseLeave={stopAnimation} // Stop animation on mouse leave
//       style={{ transform: `translateX(${cardsLeftPosition}px)` }}>

//         <div className="carddd card1">
//           <span className='servicename'> Website Development </span>
//         </div>
//         <div className="carddd card2">
//         <span className='servicename'> Website Design </span>

//         </div>
//         <div className="carddd card3">
//         <span className='servicename'> UI/UX </span>

//         </div>
//         <div className="carddd card4">
//         <span className='servicename'> SEO </span>

//         </div>
//         <div className="carddd card5">
//         <span className='servicename'> SMO </span>

//         </div>
//         <div className="carddd card6">
//         <span className='servicename'> AZURE </span>

//         </div>
//     </div>
//     </div>
//   )
// }
import React, { useState, useRef, useEffect } from 'react';
import './services.css';

const Services = () => {
  

  return (
      <div className="services">
        <span className="heading">Services</span>
        <div
          className="card-list">
            <div className='card1'>
                <div className='cardleft card1left'>
                  <span className='cardleftinner card1lefttext'>
                  Website Development

                  </span>
                </div>
                <div className='card1right'>
                  Lorem Epsom ghasofhshud sdfhufaslh dgfjhsfkj sjfhkks
                </div>
            </div>
            <div className='card2'>
                <div className='cardleft card2left'>
                  <span className='cardleftinner card2lefttext'>
                  Website Development

                  </span>
                </div>
                <div className='card2right'>
                  Lorem Epsom ghasofhshud sdfhufaslh dgfjhsfkj sjfhkks
                </div>
            </div>
            <div className='card3'>
                <div className='cardleft card3left'>
                  <span className='cardleftinner card3lefttext'>
                  Website Development
                  </span>
                </div>
                <div className='card3right'>
                  Lorem Epsom ghasofhshud sdfhufaslh dgfjhsfkj sjfhkks
                </div>
            </div>
            <div className='card4'>
                <div className='cardleft card4left'>
                  <span className='cardleftinner card4lefttext'>
                  Website Development

                  </span>
                </div>
                <div className='card4right'>
                  Lorem Epsom ghasofhshud sdfhufaslh dgfjhsfkj sjfhkks
                </div>
            </div>
        </div>
      </div>
  );
};

export default Services;
