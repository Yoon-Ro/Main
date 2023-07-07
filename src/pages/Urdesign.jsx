import React from "react";
import Image1 from "../assets/Newton_prototype.png";
import table from "../assets/table.png";
import journey from "../assets/USERJOURNEY.png";
import sketch from "../assets/Sketch.png";
import { Navbar3 } from "../components/index";
import Main from "../assets/TESTIMAGE2.jpeg"


const Urdesign = () => {
  return (
    <div>
      <Navbar3 />

      <div className=" max-w-7xl mx-auto mt-24">
      <img src={Main} alt="Main image of Urdesign on laptop" className=" h-[50vh] object-cover rounded-xl"/>
        <div className="grid grid-cols-5 gap-8 mt-16">
          <div className=" col-span-1">
          <p className="text-lg font-medium sticky top-32 mb-12">Summary</p>
          </div>
          <div className=" col-span-4">
          <button className="px-4 hover:bg-blue-500 rounded-full inline-block font-normal tracking-wide text-lg text-slate-600 hover:underline  transition-all duration-125 hover:scale-105 border-[1px] my-2 hover:text-white">Urdesign.co</button>
          <h1 className="text-4xl py-2 font-medium">Small business needs good design</h1>
          <p className="text-md w-3/4 py-2">I led product design process in a 3-month project to implement two-factor authentication (2FA) on Contractbook. The goal was to enhance user security without sacrificing UX. To achieve this, we chose email 2FA for a faster implementation and quicker value delivery to users.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Urdesign;
