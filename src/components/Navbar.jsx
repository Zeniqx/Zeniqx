// import React,{ useState } from 'react'
// import './Navbar.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import './hooks/useCursor.css'
// import useCursor from './hooks/useCursor';
// import zeniqxlogo from '../assets/Zeniqx-04.svg'
// <style>
// {/* @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap'); */}
// </style>


 

// function Navbar() {
//   const cursorRef = useCursor();

//   const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }
 
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const navbarHeight = document.querySelector('.Navbar').offsetHeight;
//       const elementPosition = element.offsetTop - navbarHeight;
  
//       window.scrollTo({
//         top: elementPosition,
//         behavior: 'smooth',
//       });
//     }
//   };
//   return (
//     <div className='Navbar'>
//         <div className='logo'>
//           <img onClick={() => scrollToSection('hero')} className="svg-icon" src={zeniqxlogo}/>
//         </div>
//         <div className="menu-icon" onClick={handleShowNavbar}>
//           <MenuIcon style={{ color: "black" }}/>
//         </div>
//         <div className={`navbaritems ${showNavbar && 'active'}`}>
//             <ul>
//                 <li><a className='lista cursor-scale small' onClick={() => scrollToSection('hero')}>HOME</a></li>
//                 <li><a className='lista cursor-scale small' onClick={() => scrollToSection('containerr')}>SERVICES</a></li>
//                 <li><a className='lista cursor-scale small' onClick={() => scrollToSection('work')}>OUR WORK</a></li>
//                 <li><a className='lista cursor-scale small' onClick={() => scrollToSection('schedule')}>CONTACT</a></li>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import './hooks/useCursor.css';
import useCursor from './hooks/useCursor';
import zeniqxlogo from '../assets/Zeniqx-04.svg';

function Navbar() {
  const cursorRef = useCursor();

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector('.Navbar').offsetHeight;
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  useEffect(() => {
    // Add click event listener to the document body
    document.body.addEventListener('click', closeNavbar);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('click', closeNavbar);
    };
  }, []);

  // Prevent closing the navbar when clicking on the navbar itself
  const handleNavbarClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='Navbar' onClick={handleNavbarClick}>
      <div className='logo'>
        <img onClick={() => scrollToSection('hero')} className='svg-icon' src={zeniqxlogo} />
      </div>
      <div className='menu-icon' onClick={handleShowNavbar}>
        <MenuIcon style={{ color: 'black' }} />
      </div>
      <div className={`navbaritems ${showNavbar && 'active'}`} onClick={(e) => e.stopPropagation()}>
        <ul>
          <li>
            <a className='lista cursor-scale small' onClick={() => scrollToSection('hero')}>
              HOME
            </a>
          </li>
          <li>
            <a className='lista cursor-scale small' onClick={() => scrollToSection('containerr')}>
              SERVICES
            </a>
          </li>
          <li>
            <a className='lista cursor-scale small' onClick={() => scrollToSection('work')}>
              OUR WORK
            </a>
          </li>
          <li>
            <a className='lista cursor-scale small' onClick={() => scrollToSection('schedule')}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
