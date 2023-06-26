import React from 'react'
import {
    Navbar,
    Home,
    About,
    Footer,
    Together,
    Work,
    Work2
  } from "../components/index"
  import { ParallaxProvider } from 'react-scroll-parallax';

const Homepage = () => {
  return (
    <ParallaxProvider>
    <div className=" font-Gloock bg-white">
    <Navbar />

      <Home />

      <Work/>
      <Work2/>
 <Together/>

 
    </div>
    </ParallaxProvider>
  )
}

export default Homepage