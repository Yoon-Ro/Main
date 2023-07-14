import React from 'react'
import {BsArrowRightCircleFill, BsPinterest} from "react-icons/bs";
import {AiFillLinkedin, AiFillYoutube, AiFillBehanceSquare} from "react-icons/ai";

const Together = () => {
  return (
    <div className='bg-gradient-to-t from-slate-300 via-slate-100 to-white  h-[30vh] flex justify-center items-center'>
      <div className='w-full md:w-3/4  mx-auto'>
        <div className=''>
<div className='mx-auto grid md:grid-cols-2 gap-4'>
    <h1 className='col-span-1 text-4xl pb-6 text-slate-700 leading-12'>Have project in mind?<br/>Let's connect! </h1>
<div className="col-span-1 text-sm text-black/70">I'm currently open for a designer position. <br/>Let's talk how we can build a future together.
<a href="mailto:designer@yoonro.com"><button className='bg-white py-1 px-6 flex mt-4 text-md rounded-full gap-2 items-center  text-center shadow-xl group hover:bg-white/75 transition-all duration-125 hover:scale-105'>Contact <BsArrowRightCircleFill className='text-sm  '/>
</button></a>
</div>


   
</div>
<div className=' py-4'>
  <div className='grid md:grid-cols-2 gap-4'>
    <div className='col-span-1'>
      <h1 className='text-sm text-[#0000007c] '>Tools</h1>
      <h1 className='text-sm  text-[#000000] py-2'>Made with <span className='hover:text-[#236b4b]'>Vite</span>, Figma & Vercel</h1>
    </div>
    <div className='col-span-1 '>
    <h1 className='text-sm text-[#0000007c] '>More designs are available</h1>
      <div className=' text-[#000000c4] flex gap-4 py-2'>
      <a href="https://www.pinterest.ca/yoonro/" target="_blank"> <BsPinterest className='text-xl hover:text-red-500 transition-all duration-125 hover:scale-150'/></a>
      <a href="https://www.linkedin.com/in/yoon-ro-ab4838124/" target="_blank"><AiFillLinkedin className='text-xl hover:text-blue-700 transition-all duration-125 hover:scale-150'/></a>
      <a href="https://www.youtube.com/channel/UCudMtcbGUZs0d8x9hmgzzfg" target="_blank"><AiFillYoutube className='text-xl hover:text-red-500 transition-all duration-125 hover:scale-150'/></a>
      <a href="https://www.behance.net/yoonro" target="_blank"> <AiFillBehanceSquare className='text-xl hover:text-blue-700 transition-all duration-125 hover:scale-150'/> </a>

      </div>
    </div>

  </div>

</div>

        </div>
        </div>
    </div>
  )
}

export default Together