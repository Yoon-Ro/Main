import React from 'react'
import { useParallax } from "react-scroll-parallax";
import waving from "../../assets/waving.png";
import profile from "../../assets/Studio-Profile.jpeg"


const Together = () => {
  return (
    <div className=''>
        <div className=' w-full sm:pt-0  sm:px-0 px-2  bg-gradient-to-b from-slate-300 via-slate-200 to-white 
'>
        <div className="md:px-0 md:w-3/4 relative mx-auto md:pt-80 h-[100vh]">
          {/* PROFILE #1 HELLO */}
          <div className='grid grid-cols-3 gap-8 mx-auto '>
<div className=' col-span-2'>

<div className="text-md text-black py-8"><div className='flex items-center gap-4'><span className='text-4xl font-medium'>Hello again!</span><img src={waving} alt="/" className='w-[40px] h-[40px] mb-3'/></div>
<h1 className='text-md w-4/5 py-4'>I'm Yoon. I am a digital graphic designer with a Bachelor's degree in Interaction (UI/UX) Design. In Let’s Dive, I design with mission to  help remote and hybrid teams feel happier at work.  As a designer, my goal is to empower business strategies to achieve their goals and improve their product's engagement.</h1> </div>


   
</div>
<div className=' col-span-1'>
  <img src={profile} alt="/" className=' mx-auto rounded-xl' />
</div>

</div>
{/* <div className=''>
<h className="text-2xl font-bold">Education</h>
<p className='text-md text-black py-4'>Bachelor in Interaction (UI/UX) Design @ Emily Carr University of Art + Design<br/>
August 2014 ~ May 2018</p>
</div>
<div className='my-8'>
<h className="text-2xl font-bold">Experience</h>
<p className='text-md text-black py-4'>Graphic Designer @ Let’s Dive<br/>
Nov 2022 ~ Present</p>
<p className='text-md text-black py-4'>Graphic Designer @ Green Image Tech<br/>
Feb 2019 ~ Present</p>
</div> */}
</div>
        </div>
    </div>
  )
}

export default Together