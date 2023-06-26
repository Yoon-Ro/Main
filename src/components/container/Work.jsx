import React from "react";
import TEST from "../../assets/TESTIMAGE.jpeg"

import { useParallax } from "react-scroll-parallax";


const Work = () => {

  return (
    <div id="design">
      <div className="w-full sm:w-3/4  mx-auto my-16 ">

        <div className="grid sm:grid-cols-3 gap-4 ">
        <div className="col-span-1 py-4 px-4 bg-slate-100/50 rounded-xl relative">
                <p className="px-4 py-2 bg-slate-200 rounded-xl inline-block">Design Casestudy</p>
                <p className="text-4xl py-4">Newton Index</p>
                <p className="text-sm py-2">Universal Icon Set is drawn on a pixel-based grid of 24px x 24px and scaled-up linearly to different sizes.</p>
                <p className="text-sm py-2 underline ">Read More</p>
      
            </div>
            <div className="col-span-2">
                <img src={TEST} alt="/" className="rounded-xl"/>
            </div>
            


        </div>
        <div className="grid sm:grid-cols-3 gap-4 py-4">
        <div className="col-span-1 py-4 px-4 bg-slate-100/20 rounded-xl relative">
                <p className="px-4 py-2 bg-slate-200 rounded-xl inline-block">Business Development</p>
                <p className="text-4xl py-4">Urdesign.co</p>
                <p className="text-sm py-2">Universal Icon Set is drawn on a pixel-based grid of 24px x 24px and scaled-up linearly to different sizes.</p>
                <p className="text-sm py-2 underline ">Read More</p>
      
            </div>
            <div className="col-span-2">
                <img src={TEST} alt="/" className="rounded-xl"/>
            </div>
            <div className="col-span-3 py-4 px-4 bg-slate-100/50 rounded-xl relative">
                <p className="px-4 py-2 bg-slate-200 rounded-xl inline-block">In process</p>
                <p className="text-4xl py-4">Finsent</p>
                <p className="text-sm py-2">Universal Icon Set is drawn on a pixel-based grid of 24px x 24px and scaled-up linearly to different sizes.</p>
                <p className="text-sm py-2 underline ">Notify me</p>
      
            </div>


        </div>

 

      </div>

    </div>
  );
};

export default Work;
