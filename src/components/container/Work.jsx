import React from "react";
import TEST from "../../assets/TESTIMAGE.jpeg"
import TEST2 from "../../assets/TESTIMAGE2.jpeg"
import { Link } from "react-router-dom";


import { useParallax } from "react-scroll-parallax";


const Work = () => {

  return (
    <div id="design">
      <div className="w-full md:w-3/4  mx-auto md:my-16 md:pb-32 ">

        <div className="grid md:grid-cols-2 gap-4 ">
          <div className="col-span-1 group">
            <div className=" overflow-clip rounded-xl ">
          <img src={TEST2} alt="/" className=" group-hover:scale-110 transition-all duration-150 "/>
          </div>
          <div className="py-0  relative">
                <p className="text-4xl py-4">Urdesign.co</p>
                <p className="text-sm text-black/60">(Business Development)</p>
                <p className="text-sm py-4 w-2/3">Universal Icon Set is drawn on a pixel-based grid of 24px x 24px and scaled-up linearly to different sizes.</p>
                <Link to="/Urdesign"><button className="px-6 py-1 bg-blue-400 rounded-full inline-block font-light tracking-wide text-sm text-white hover:text-blue-200 hover:bg-blue-500 ">Read More</button></Link>

      
            </div>
          </div>
          <div className="col-span-1 group">
            <div className=" overflow-clip rounded-xl ">
          <img src={TEST} alt="/" className=" group-hover:scale-110 transition-all duration-150 "/>
          </div>
          <div className="py-0  relative">
                <p className="text-4xl py-4">Newton Index</p>
                <p className="text-sm text-black/60">(Product&Web Design)</p>
                <p className="text-sm py-4 w-2/3">Universal Icon Set is drawn on a pixel-based grid of 24px x 24px and scaled-up linearly to different sizes.</p>
                                <button className="px-6 py-1 bg-blue-400 rounded-full inline-block font-light tracking-wide text-sm text-white hover:text-blue-200 hover:bg-blue-500 ">                                    <Link to="/Newton">
Read More</Link></button>

      
            </div>
          </div>

            


        </div>


 

      </div>

    </div>
  );
};

export default Work;
