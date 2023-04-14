import React from 'react'
import { useParallax } from "react-scroll-parallax";
import waving from "../../assets/waving.png";
import profile from "../../assets/Studio-Profile.png"


const Together = () => {
    const { ref } = useParallax({ speed: -40 });
  return (
    <div className=' overflow-y-clip'>
        <div className='bg-gradient-to-t from-[#fff3e5] via-red-200 to-yellow-100 h-[100vh] flex  items-center'>
        <div ref={ref} className="mt-[0rem] mx-auto w-[1042px]">
          {/* PROFILE #1 HELLO */}
          <div className='grid grid-cols-3 gap-8 mx-auto'>
<div className=' col-span-2'>
    <h1 className='text-4xl text-white bg-[#190847] py-2 px-4 inline-block rounded-2xl'>Meet Yoon</h1>
<h1 className="text-md text-black/70 py-8"><div className='flex items-center gap-4'><span className='text-2xl font-bold'>Hello again!</span><img src={waving} alt="/" className='w-[40px] h-[40px] mb-3'/></div>I'm Yoon. I am a digital graphic designer with a Bachelor's degree in Interaction (UI/UX) Design. In Let’s Dive, I design with mission to  help remote and hybrid teams feel happier at work.  As a designer, my goal is to empower business strategies to achieve their goals and improve their product's engagement.</h1>


   
</div>
<div className=' col-span-1'>
  <img src={profile} alt="/" className=' mx-auto rounded-full' />
</div>

</div>
<div>
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
</div>
</div>
        </div>
    </div>
  )
}

export default Together