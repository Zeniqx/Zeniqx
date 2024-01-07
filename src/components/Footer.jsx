import React from 'react'
import './footer.css'
import Insta from '../assets/insta.svg'
import Linkedin from '../assets/linkedin.svg'
import ZeniqxLogo from '../assets/Zeniqx_white-05.svg'
import './hooks/useCursor.css'
import useCursor from './hooks/useCursor';
function Footer() {
  const cursorRef = useCursor();
  const handleInstaClick = () => {
    window.open('https://www.instagram.com/_zeniqx_?igsh=amJ3Y25wN3BpNGFm', '_blank'); // Replace with your Instagram URL
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/company/zeniqx', '_blank'); // Replace with your LinkedIn URL
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
  return (
    <div className='footer'>
      <div className='biglogo'>
            <img className='logoo cursor-scale' src={ZeniqxLogo}/>
      </div>
      <div className='footerlinks'>
        <div className="navlinkcontain">
          <span className='listnav homelink'  onClick={() => scrollToSection('hero')}>HOME</span>
          <span className='listnav serviceslink'onClick={() => scrollToSection('containerr')}>SERVICES</span>
          <span className='listnav worklink '  onClick={() => scrollToSection('work')}>OUR WORK</span>
          <span className='listnav contactlink ' onClick={() => scrollToSection('schedule')}>CONTACT</span>
        </div>
        <div className="iconlink">
            <img className='icons' src={Insta} alt='insta' onClick={handleInstaClick}/>
            <img className='icons' src={Linkedin} alt='insta' onClick={handleLinkedinClick}/>
        </div>
      </div>
        <hr className='linee'/>
        <div className='allright'>
        All rights reserved: 2024
        </div>
    </div>
  )
}

export default Footer
