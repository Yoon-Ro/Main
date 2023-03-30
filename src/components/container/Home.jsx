import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="w-full sm:pt-0 pt-[6rem] sm:px-0 px-2 sm:w-[1420px] mx-auto"
      id="home"
    >
      <div className="md:flex  items-center  h-[100vh] sm:pt-0 pt-[4rem]">
        {/* HERO TEXT - LEFT */}
        <div className="w-3/4 relative">
          <div className="absolute bg-white/0 w-[20rem] h-10 z-10 rounded-full left-5 top-1 bg-gradient-to-b from-[#F1F7FE]" />
          <div className="px-20 py-4  inline-block rounded-full bg-gradient-to-b from-[#50A2F0] from-0% via-[#A7DCFB] via-90% to-[#B7E5FC] to-100% relative shadow-xl shadow-blue-500/50">
            <p className="text-4xl font-sm text-black/60 z-30">Hi, I'm Yoon</p>
          </div>

          <div className="sm:text-3xl  font-bold py-4">
            Experienced graphic designer based in Vancouver.
            <br />
            -&gt;Graphic Design, UX Design, Front End Dev
          </div>

          {/* SOCIAL LINKS */}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
