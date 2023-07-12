import React from "react";
import Image1 from "../assets/Newton_prototype.png";
import table from "../assets/table.png";
import journey from "../assets/USERJOURNEY.png";
import sketch from "../assets/Sketch.png";
import { Navbar3 } from "../components/index";
import Main from "../assets/TESTIMAGE2.jpeg";
import Second from "../assets/Second.jpeg";
import Challenge from "../assets/Challenge.png";
import Competitive from "../assets/Competitive.jpeg";
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
            <p className="font-semibold text-md sticky top-32 mb-12 text-black/80 border-[1px] inline-block px-4 py-1 rounded-full">Challenge</p>
          </div>
          <div className="col-span-1"></div>
          <div className=" col-span-3">
            <p className="text-md  py-2">
            I have identified three important challenges that many small local businesses need to address. 
            <br/><br/>First, the design is not impactful due to an attempt to include too much information in a small space, resulting in poor readability and a complicated design. 
            <br/><br/>Second, outdated references are being used, with a lack of design hierarchy and exaggerated use of font and color, diluting the main core message that businesses want to convey.
            <br/><br/>
            Lastly, there is a lack of design confidence. In many cases, the client (business owner) may ask the designer to add more text and colors after receiving the drafts. If the designer can write a clear and concise message, they can help the client and improve the design.
            </p>
            <div className="bg-blue-200 mt-3 rounded-xl group hover:bg-blue-200 transition-all duration-100">
            <p className=" text-sm  px-4 pt-2 font-semibold text-blue-700">Exmaples from Facebook</p>
        <img
          src={Challenge}
          alt="Main image of Urdesign on laptop"
          className=" object-contain  group-hover:scale-105 transition-all duration-100"
        />
        </div>
          </div>
        </div>

        {/* DISCOVERY */}
        <div className="grid grid-cols-5 gap-8 mt-16">
          <div className=" col-span-1">
            <p className="text-lg sticky top-32 mb-12 text-black/80">Discovery</p>
          </div>
          <div className="col-span-1"></div>
          <div className=" col-span-3">
          <h1 className="text-2xl py-2 ">
              What is so hard about good design?
            </h1>
            <p className="text-md  py-4">
       While there are numerous productized design subscription models available, why don't they offer access to this particular service? Furthermore, many talented designers are keen to work for local services, so why isn't this happening at all?
            </p>
            <div className="bg-black/10 my-3 rounded-xl group ">
            <p className=" text-sm  px-4 py-2 font-semibold text-black">Exmaples from Facebook</p>
        <img
          src={Competitive}
          alt="Main image of Urdesign on laptop"
          className=" object-contain"
        />
        </div>

            <div className="grid grid-cols-3 gap-2">
          
<div className=" col-span-1 px-2 py-4 rounded-lg bg-black/10  inline-block text-sm">
  
Example design services are mainly promoting themselves to the bigger audiences such as funded startups, software companies and bigger organizations.
</div>
<div className=" col-span-1 px-2 py-4 rounded-lg bg-black/10  inline-block text-sm">
Monthly subscription fees are exceptionally high compare to the scale of the local small businesses. To be fair, more money results better outcomes.
</div>
<div className=" col-span-1 px-2 py-4 rounded-lg bg-black/10  inline-block text-sm">
Small business aren’t sure how they are going to utilized the design service. If they have endless works to give, that’s good. But in reality, most of small businesses don’t have the marketing and design plan.
</div>

            </div>

<div className="pt-8">
  <p className="text-2xl py-4">System story</p>

<p>Based on the insights I got from competitive analysis, I've created a system story to form the early requirements of the project.
</p>
<p className="text-md  inline-block px-4 my-4 rounded-full bg-black/10">What</p>
<p>
Affordable design subscription service.
</p>
<p className="text-md  inline-block px-4 my-4 rounded-full bg-black/10">Who</p>
<p>
For small local businesses
</p>
<p className="text-md  inline-block px-4 my-4 rounded-full bg-black/10">Why</p>
<p>
To help them to achieve their business objective with better marketing design materials.
</p>
<p className="text-md  inline-block px-4 my-4 rounded-full bg-black/10">How</p>
<p>
By providing various range of services to choose, cost effective, fast delivery by validated designers.
</p>
</div>

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
