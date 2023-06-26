import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";
import waving from "../../assets/waving.png";

const Home = () => {
  return (
    <div
      className="w-full sm:pt-0  sm:px-0 px-2  bg-gradient-to-tr from-rose-100 to-teal-100"
      id="home"
    ><div className="mx-auto">
      <div className="flex  items-center  h-[80vh] ">
        {/* HERO TEXT - LEFT */}
        <div className="w-3/4 relative mx-auto">
          <div className="absolute bg-white/0 w-[23rem] h-10 z-10 rounded-full left-5 top-1 bg-gradient-to-b from-[#F1F7FE]" />
          <div className="px-20 py-4  inline-block rounded-full bg-gradient-to-b from-[#50A2F0] from-0% via-[#A7DCFB] via-90% to-[#B7E5FC] to-100% relative shadow-xl shadow-blue-500/50">
            <p className=" text-[7rem] xs:text-4xl text-black/60 z-30 flex items-center gap-4">Hello there<img src={waving} alt="/" className="h-[44px] w-[44px]"/></p>
          </div>

          <div className="text-[2rem] leading-[3rem] py-8">
          I’m Yoon, a digital graphic designer focused on            <br />
          empowering business and product growth with design.
          </div>


          {/* SOCIAL LINKS */}
        </div>
      </div>

      </div>
    </div>
  );
};

export default Home;
