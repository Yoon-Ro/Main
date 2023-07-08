import React from "react";
import Image1 from "../assets/Newton_prototype.png";
import table from "../assets/table.png";
import journey from "../assets/USERJOURNEY.png";
import sketch from "../assets/Sketch.png";
import { Navbar3 } from "../components/index";
import Main from "../assets/TESTIMAGE2.jpeg";
import Second from "../assets/Second.jpeg";
import Challenge from "../assets/Challenge.png";
import {
  Together
} from "../components/index"

const Urdesign = () => {
  return (
    <div>
      <Navbar3 />

      <div className=" max-w-7xl mx-auto mt-24">
        <img
          src={Main}
          alt="Main image of Urdesign on laptop"
          className=" h-[50vh] object-cover rounded-xl"
        />
        <div className="grid grid-cols-5 gap-8 mt-16">
          <div className=" col-span-1">
            <p className="text-lg sticky top-32  text-black/80">Summary</p>
          </div>
          <div className=" col-span-4">
            <button className="px-4 hover:bg-blue-500 rounded-full inline-block font-normal tracking-wide text-lg text-slate-600 hover:underline  transition-all duration-125 hover:scale-105 border-[1px] my-2 hover:text-white">
              Urdesign.co
            </button>
            <h1 className="text-4xl py-2 font-medium">
              Small business needs good design
            </h1>
            <p className="text-md w-3/4 py-2">
            There was a trend of subscribing to design services. It all started when a designer named Bret claimed that he was earning 1 million dollars with his design subscription service, which inspired other designers to offer similar services. Most business can't afford 5k every month to a single designer without proper recruitment prorcess.
<br/>
<br/>
<span className="font-medium">To solve this problem, I narrowed the target audience down to local small businesses and provided them with a faster and more affordable design service.
</span>
<br/>
<br/>
Active Website: <span className="text-blue-500 underline">https://www.urdesign.co</span>
            </p>
          </div>
        </div>
        <div className="h-[70vh] overflow-scroll bg-blue-500 my-16 rounded-xl group">
        <img src={Second} className="w-[70%] mx-auto my-8 rounded-xl shadow-xl group-hover:scale-110 transition-all duration-100"/>
        </div>
        <div className="grid grid-cols-5 gap-8 mt-16">
          <div className=" col-span-1">
            <p className="text-lg sticky top-32 mb-12 text-black/80">Challenge</p>
          </div>
          <div className="col-span-1"></div>
          <div className=" col-span-3">
            <p className="text-md  py-2">
            We identified two important challenges to address in the website redesign. 
            <br/><br/>First, we recognized the need to broaden our audience beyond social media and increase visitor traffic outside these platforms. 
            <br/><br/>Second, the team aimed to convey a sense of credibility and professionalism to appeal to readers aged 35 and above while maintaining its reputation as an innovative and disruptive news portal for younger readers.
            </p>
            <div className="bg-black/10 mt-16 rounded-l-xl group hover:bg-blue-200 transition-all duration-100">
        <img
          src={Challenge}
          alt="Main image of Urdesign on laptop"
          className=" object-contain  group-hover:scale-125 transition-all duration-100"
        />
        </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8 mt-16">
          <div className=" col-span-1">
            <p className="text-lg sticky top-32 mb-12 text-black/80">Discovery</p>
          </div>
          <div className="col-span-1"></div>
          <div className=" col-span-3">
            <p className="text-md  py-2">
            We identified two important challenges to address in the website redesign. 
            <br/><br/>First, we recognized the need to broaden our audience beyond social media and increase visitor traffic outside these platforms. 
            <br/><br/>Second, the team aimed to convey a sense of credibility and professionalism to appeal to readers aged 35 and above while maintaining its reputation as an innovative and disruptive news portal for younger readers.
            </p>
 
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8 mt-16">
          <div className=" col-span-1">
            <p className="text-lg sticky top-32 mb-12 text-black/80">Ideation</p>
          </div>
          <div className="col-span-1"></div>
          <div className=" col-span-3">
            <p className="text-md  py-2">
            We identified two important challenges to address in the website redesign. 
            <br/><br/>First, we recognized the need to broaden our audience beyond social media and increase visitor traffic outside these platforms. 
            <br/><br/>Second, the team aimed to convey a sense of credibility and professionalism to appeal to readers aged 35 and above while maintaining its reputation as an innovative and disruptive news portal for younger readers.
            </p>
 
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8 mt-16">
          <div className=" col-span-1">
            <p className="text-lg sticky top-32 mb-12 text-black/80">Strategy</p>
          </div>
          <div className="col-span-1"></div>
          <div className=" col-span-3">
            <p className="text-md  py-2">
            We identified two important challenges to address in the website redesign. 
            <br/><br/>First, we recognized the need to broaden our audience beyond social media and increase visitor traffic outside these platforms. 
            <br/><br/>Second, the team aimed to convey a sense of credibility and professionalism to appeal to readers aged 35 and above while maintaining its reputation as an innovative and disruptive news portal for younger readers.
            </p>
 
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8 mt-16">
          <div className=" col-span-1">
            <p className="text-lg sticky top-32 mb-12 text-black/80">Learnings</p>
          </div>
          <div className="col-span-1"></div>
          <div className=" col-span-3">
            <p className="text-md  py-2">
            We identified two important challenges to address in the website redesign. 
            <br/><br/>First, we recognized the need to broaden our audience beyond social media and increase visitor traffic outside these platforms. 
            <br/><br/>Second, the team aimed to convey a sense of credibility and professionalism to appeal to readers aged 35 and above while maintaining its reputation as an innovative and disruptive news portal for younger readers.
            </p>
 
          </div>
        </div>


        
      </div>
      
      <Together/>
    </div>
  );
};

export default Urdesign;
