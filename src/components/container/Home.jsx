import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import {motion} from "framer-motion";

const Home = () => {
 
  
  
  return (
    <div className="w-full sm:pt-0 pt-[6rem] sm:px-0 px-2 sm:w-[1420px] mx-auto" id="home">
      <div className="md:flex  items-center  h-[100vh] sm:pt-0 pt-[4rem]">
        {/* HERO TEXT - LEFT */}
        <div className="w-3/4">
<h1 className="text-6xl font-medium px-8 py-2 my-4 bg-[#507efc] inline-block rounded-full text-white">Hi, I'm Yoon</h1>
          <div className="sm:text-3xl  font-bold">
          Experienced graphic designer based in Vancouver.<br/>-&gt;Graphic Design, UX Design, Front End Dev
    
          </div>

          {/* SOCIAL LINKS */}
          


        </div>

  
      </div>

      <div>



      </div>
    </div>
  );
};

export default Home;
