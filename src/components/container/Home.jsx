import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import {motion} from "framer-motion";

const Home = () => {
 
  
  
  return (
    <div className="w-full sm:pt-0 pt-[8rem] sm:px-0 px-2 sm:w-[1420px] mx-auto" id="home">
      <div className="md:flex  items-center  h-[100vh] sm:pt-0 pt-[4rem]">
        {/* HERO TEXT - LEFT */}
        <div className="w-3/4">
<h1 className="text-2xl font-medium px-4 py-2 my-4 bg-[#507efc] inline-block rounded-full text-white">Hi, I'm Yoon</h1>
          <div className="sm:text-4xl text-[1.825rem] font-bold">
          Based in Vancouver, specialized in 

          <span className="group relative"> <span className="group-hover:text-[#e44545] hover:animate-jump transition-all  
          hover:bg-[#123123]  hover:rounded-xl">UI/UX design,</span> 
          {/* <img src={hero} alt="/" className="transition-all w-[1024px] invisible group-hover:visible absolute right-0 top-[-23rem]"/> */}
          </span> 

          <span className="group relative"> <span className="group-hover:text-[#eee041] hover:animate-jump transition-all  
          hover:bg-[#122631] hover:rounded-xl "> web/app development,</span> 
          {/* <img src={hero} alt="/" className="transition-all w-[1024px] invisible group-hover:visible absolute right-0 top-[-23rem]"/> */}
          </span> 
          <span> and</span>
          <span className="group relative"> <span className="group-hover:text-[#4180ee] hover:animate-jump transition-all  
          hover:bg-[#271231]  hover:rounded-xl duration-50"> graphic design.</span>  </span>       
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
