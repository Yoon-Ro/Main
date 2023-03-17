import React, { useState, useEffect } from 'react'
import {navLinks} from "../../Data";
import NavLink from './NavLink';

const Navbar = () => {

    const [toggle,setToggle] = useState(false);

    const [active,setActive] = useState(null);

    useEffect(()=> {
const scrollActive = () => { setActive(window.scrollY > 20);};

      window.addEventListener("scroll", scrollActive);
      return() => window.removeEventListener("scroll", scrollActive);
    },{active});

  return (
    <div className={`${
      active ? "  " : ""
    } fixed w-full justify-center top-0 left-0 z-20`}>
      <div>
        <div className={`${
      active ? "py-4  " : "py-4"
    } w-fit py-1 mx-auto flex items-center justify-center px-1 mt-8 bg-white/80 backdrop-blur  shadow-2xl rounded-full`}>

         <div className='flex items-center justify-between '>
   <h1 className='font-medium text-lg rounded-full shadow-md px-4 py-3 bg-white'>Design</h1>
   <h1 className='font-medium text-lg rounded-full px-4 py-3 text-[#0000007c]'>About</h1>
         </div>         


        </div>
      </div>
    </div>
  )
}

export default Navbar 