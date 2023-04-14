import React from 'react'
import {
    Navbar2,
    Together2
  } from "../components/index"
  import { ParallaxProvider } from 'react-scroll-parallax';


const Me = () => {
  return (
    <ParallaxProvider>
    <div>
        <Navbar2/>
        <Together2/>
    </div>
    </ParallaxProvider>
  )
}

export default Me