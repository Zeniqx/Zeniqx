import React,{ useState } from 'react'
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import './hooks/useCursor.css'
import useCursor from './hooks/useCursor';
import zeniqxlogo from '../assets/Zeniqx_white-05.svg'
<style>
{/* @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap'); */}
</style>


 

function Navbar() {
  const cursorRef = useCursor();

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
 
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
    <div className='Navbar'>
        <div className='logo'>
          <img className="svg-icon" src={zeniqxlogo}/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon style={{ color: "white" }}/>
        </div>
        <div className={`navbaritems ${showNavbar && 'active'}`}>
            <ul>
                <li><a className='lista cursor-scale small' onClick={() => scrollToSection('hero')}>HOME</a></li>
                <li><a className='lista cursor-scale small' onClick={() => scrollToSection('containerr')}>SERVICES</a></li>
                <li><a className='lista cursor-scale small' onClick={() => scrollToSection('work')}>OUR WORK</a></li>
                <li><a className='lista cursor-scale small' onClick={() => scrollToSection('schedule')}>CONTACT</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
