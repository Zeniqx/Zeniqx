import React from 'react'
import './footer.css'
import Insta from '../assets/Instagram.svg'
import Linkedin from '../assets/linked.svg'
import ZeniqxLogo from '../assets/Zeniqx-04.svg'
import Call from '../assets/call.svg'
import FB from '../assets/Facebook.svg'
import Mail from '../assets/Mail.svg'
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
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/profile.php?id=61554907876543', '_blank'); // Replace with your LinkedIn URL
  };
  const handleMailClick = () => {
    window.location.href = 'mailto:contact@zeniqx.com'; // Replace with your email address
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+918884209113'; // Replace with your phone number
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
            {/* <img className='icons' src={Insta} alt='insta' onClick={handleInstaClick}/>
            <img className='icons' src={Linkedin} alt='insta' onClick={handleLinkedinClick}/> */}
            <img className='icons' src={Call} alt='Call' onClick={handleCallClick}/>
            <img className='icons' src={Mail} alt='Mail' onClick={handleMailClick}/>
            <img className='icons' src={Insta} alt='insta'  onClick={handleInstaClick}/>
            <img className='icons' src={FB} alt='Facebook' onClick={handleFacebookClick}/>
            <img className='icons' src={Linkedin} alt='Linkedin'  onClick={handleLinkedinClick}/>
            {/* <span className='mobilenumber'>+91 888 420 9113</span> */}
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
