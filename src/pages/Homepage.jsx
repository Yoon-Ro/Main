import React from 'react'
import {
    Navbar,
    Home,
    About,
    Footer,
    Together,
    Work,
    About2
  } from "../components/index"
  import { ParallaxProvider } from 'react-scroll-parallax';

const Homepage = () => {
  return (
    <ParallaxProvider>
    <div className=" font-Gloock bg-white">
    <Navbar />

      <Home />
      <Work/>
 <Together/>

 
    </div>
    </ParallaxProvider>
  )
}

export default Homepage