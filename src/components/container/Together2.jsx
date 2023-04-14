import React from 'react'
import { useParallax } from "react-scroll-parallax";

const Together = () => {
    const { ref } = useParallax({ speed: -40 });
  return (
    <div className=' overflow-y-clip'>
        <div className='bg-gradient-to-t from-[#fff3e5]	 to-[#112332]  h-[100vh] flex  items-center'>
        <div ref={ref} className="mt-[0rem] mx-auto">
<div className='mx-auto text-center'>
    <h1 className='text-6xl mt-12 pb-6 text-[#ffffff]'>Design is my passion</h1>
<h1 className="text-lg text-black/70">I'm currently open for aasdaposition. Let's talk how we can build a future together.</h1>
   
</div>
</div>
        </div>
    </div>
  )
}

export default Together