import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Services from './components/Services'
import ServiceFramer from './components/ServiceFramer'
import Footer from './components/Footer'
import Work from './components/Work'
import './components/hooks/useCursor.css'
import useCursor from './components/hooks/useCursor'
import Schedule from './components/Schedule'
// import Joinn from './components/Joinn'
function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className='main'>
        <Navbar/>
        <Hero/>
        <Section/>
        {/* <Services/> */}
        <ServiceFramer/>
        <Work/>
        <Schedule/>
        {/* <Joinn/> */}
        <Footer/>
    </div>

  )
}

export default App
