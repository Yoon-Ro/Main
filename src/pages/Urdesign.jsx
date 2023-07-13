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
import Ideation1 from "../assets/Ideation1.jpeg";
import Ideation2 from "../assets/Ideation2.jpeg";
import Ideation3 from "../assets/Ideation3.jpeg";
import Ideation4 from "../assets/Ideation4.jpeg";
import Ideation5 from "../assets/Ideation5.jpeg";
import Ideation6 from "../assets/Ideation6.jpeg";
import Ideation7 from "../assets/Ideation7.jpeg";
import Ideation8 from "../assets/Ideation8.jpeg";
import Ideation9 from "../assets/Ideation9.jpeg";
import Ideation10 from "../assets/Ideation10.jpeg";
import { Together } from "../components/index";

const Urdesign = () => {
  return (
    <div>
      <Navbar3 />

      <div className=" w-full md:w-3/4  mx-auto my-24">
        <img
          src={Main}
          alt="Main image of Urdesign on laptop"
          className=" h-[50vh] object-cover rounded-xl"
        />
        <div className="grid grid-cols-5 gap-8 mt-16">
          <div className=" col-span-1">
          <p className=" text-md sticky top-32 mb-12 text-black/80 inline-block px-4  border-r-2 border-[#7d7d7d]">Summary</p>
          </div>
          <div className=" col-span-4">
            <button className="px-4 hover:bg-blue-500 rounded-full inline-block font-normal tracking-wide text-lg text-slate-600 hover:underline  transition-all duration-125 hover:scale-105 border-[1px] my-2 hover:text-white">
              Urdesign.co
            </button>
            <h1 className="text-4xl py-2 font-medium">
              Small business needs good design
            </h1>
            <p className="text-md w-3/4 py-2">
              There was a trend of subscribing to design services. It all
              started when a designer named Bret claimed that he was earning 1
              million dollars with his design subscription service, which
              inspired other designers to offer similar services. Most business
              can't afford 5k every month to a single designer without proper
              recruitment prorcess.
              <br />
              <br />
              <span className="font-medium">
                To solve this problem, I narrowed the target audience down to
                local small businesses and provided them with a faster and more
                affordable design service.
              </span>
              <br />
              <br />
              Active Website:{" "}
              <span className="text-blue-500 underline">
                https://www.urdesign.co
              </span>
            </p>
          </div>
        </div>
        <div className="h-[70vh] overflow-scroll bg-blue-500 my-16 rounded-xl group">
          <img
            src={Second}
            className="w-[70%] mx-auto my-8 rounded-xl shadow-xl group-hover:scale-110 transition-all duration-100"
          />
        </div>
        <div className="grid grid-cols-4 gap-8 mt-16">
          <div className=" col-span-1">
            <p className=" text-md sticky top-32 mb-12 text-black/80 inline-block px-4  border-r-2 border-[#7d7d7d]">
              Challenge
            </p>
          </div>
          <div className=" col-span-3">
            <p className="text-md  py-2">
              I have identified three important challenges that many small local
              businesses need to address.
              <br />
              <br />
              First, the design is not impactful due to an attempt to include
              too much information in a small space, resulting in poor
              readability and a complicated design.
              <br />
              <br />
              Second, outdated references are being used, with a lack of design
              hierarchy and exaggerated use of font and color, diluting the main
              core message that businesses want to convey.
              <br />
              <br />
              Lastly, there is a lack of design confidence. In many cases, the
              client (business owner) may ask the designer to add more text and
              colors after receiving the drafts. If the designer can write a
              clear and concise message, they can help the client and improve
              the design.
            </p>
            <div className="bg-blue-200 mt-3 rounded-xl group hover:bg-blue-200 transition-all duration-100">
              <p className=" text-sm  px-4 pt-2 font-semibold text-blue-700">
                Exmaples from Facebook
              </p>
              <img
                src={Challenge}
                alt="Main image of Urdesign on laptop"
                className=" object-contain  group-hover:scale-105 transition-all duration-100"
              />
            </div>
          </div>
        </div>

        {/* DISCOVERY */}
        <div className="grid grid-cols-4 gap-8 mt-16">
          <div className=" col-span-1">
          <p className=" text-md sticky top-32 mb-12 text-black/80 inline-block px-4  border-r-2 border-[#7d7d7d]">
              Discovery
            </p>
          </div>

          <div className=" col-span-3">
            <h1 className="text-2xl my-4 px-4 py-1 rounded-full bg-blue-500 text-white inline-block">
              What is so hard about good design?
            </h1>
            <p className="text-md  py-4">
              While there are numerous productized design subscription models
              available, why don't they offer access to this particular service?
              Furthermore, many talented designers are keen to work for local
              services, so why isn't this happening at all?
            </p>
            <div className="bg-black/10 my-3 rounded-xl group ">
              <p className=" text-sm  px-4 py-2 font-semibold text-black">
                Exmaples from Facebook
              </p>
              <img
                src={Competitive}
                alt="Main image of Urdesign on laptop"
                className=" object-contain"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className=" col-span-1 px-2 py-4 rounded-lg bg-black/10  inline-block text-sm">
                Example design services are mainly promoting themselves to the
                bigger audiences such as funded startups, software companies and
                bigger organizations.
              </div>
              <div className=" col-span-1 px-2 py-4 rounded-lg bg-black/10  inline-block text-sm">
                Monthly subscription fees are exceptionally high compare to the
                scale of the local small businesses. To be fair, more money
                results better outcomes.
              </div>
              <div className=" col-span-1 px-2 py-4 rounded-lg bg-black/10  inline-block text-sm">
                Small business aren’t sure how they are going to utilized the
                design service. If they have endless works to give, that’s good.
                But in reality, most of small businesses don’t have the
                marketing and design plan.
              </div>
            </div>

            <div className="pt-8">
              <p className="text-2xl py-4">System story</p>

              <p>
                Based on the insights I got from competitive analysis, I've
                created a system story to form the early requirements of the
                project.
              </p>
              <p className="text-md  inline-block px-4 my-4 rounded-full bg-black/10">
                What
              </p>
              <p>Affordable design subscription service.</p>
              <p className="text-md  inline-block px-4 my-4 rounded-full bg-black/10">
                Who
              </p>
              <p>For small local businesses</p>
              <p className="text-md  inline-block px-4 my-4 rounded-full bg-black/10">
                Why
              </p>
              <p>
                To help them to achieve their business objective with better
                marketing design materials.
              </p>
              <p className="text-md  inline-block px-4 my-4 rounded-full bg-black/10">
                How
              </p>
              <p>
                By providing various range of services to choose, cost
                effective, fast delivery by validated designers.
              </p>
            </div>
          </div>
        </div>
        {/* IDEATION  */}
        {/* IDEATION */}
        <div className="grid grid-cols-4 gap-8 mt-16">
          <div className=" col-span-1">
          <p className=" text-md sticky top-32 mb-12 text-black/80 inline-block px-4  border-r-2 border-[#7d7d7d]">
              Ideation & Design
            </p>
          </div>
          <div className=" col-span-3">
          <div className="grid grid-cols-2 p-4 bg-black/10 rounded-xl my-4 transition-all">
              <div className="col-span-1">
                {" "}
                <img
                  src={Ideation1}
                  alt="Main image of Urdesign on laptop"
                  className=" object-contain rounded-l-lg hover:scale-[200%] duration-200 hover:shadow-lg"
                />
              </div>
              <div className="col-span-1">  
                {" "}
                <img
                  src={Ideation2}
                  alt="Main image of Urdesign on laptop"
                  className=" object-contain rounded-r-lg"
                />
              </div>
            </div>
            <p className="text-md  py-8">
              Initially, I provided a list of design services that I am capable
              of offering. However, after conducting thorough research on
              various freelance platforms and comparing other design service
              websites, I decided to focus solely on website design and
              development. This decision was made after realizing that providing
              all the services with exceptional quality within a short period of
              time was not feasible.
            </p>
            <div className="grid grid-cols-2 p-4 bg-black/10 rounded-xl my-4 transition-all">
              <div className="col-span-1">
                {" "}
                <img
                  src={Ideation3}
                  alt="Main image of Urdesign on laptop"
                  className=" object-contain rounded-tl-lg hover:scale-110 duration-200 hover:shadow-lg"
                />
              </div>
              <div className="col-span-1">  
                {" "}
                <img
                  src={Ideation4}
                  alt="Main image of Urdesign on laptop"
                  className=" object-contain rounded-tr-lg hover:scale-110 duration-200 hover:shadow-lg"
                />
              </div>
              <div className="col-span-1">
                {" "}
                <img
                  src={Ideation5}
                  alt="Main image of Urdesign on laptop"
                  className=" object-contain rounded-bl-lg hover:scale-110 duration-200 hover:shadow-lg"
                />
              </div>
              <div className="col-span-1">  
                {" "}
                <img
                  src={Ideation6}
                  alt="Main image of Urdesign on laptop"
                  className=" object-contain rounded-br-lg hover:scale-110 duration-200 hover:shadow-lg"
                />
              </div>
            </div>

            <p className="text-md  py-8">
            Once I had created a landing page, I started to consider whether customers actually required a website or if they would be better off starting with social media. This led me to the realization that the customer retention process for small businesses begins with social media advertising. This includes platforms like Google Business, Instagram, Facebook, and others.
            </p>
            <div className="grid grid-cols-2 p-4 bg-black/10 rounded-xl my-4 transition-all">
              <div className="col-span-1">
                {" "}
                <img
                  src={Ideation7}
                  alt="Main image of Urdesign on laptop"
                  className=" object-contain rounded-l-lg "
                />
              </div>
              <div className="col-span-1">  
                {" "}
                <img
                  src={Ideation8}
                  alt="Main image of Urdesign on laptop"
                  className=" object-contain rounded-r-lg"
                />
              </div>
            </div>
            <p className="text-md  py-8">
            Based on our system strategy, I've created a list of design requirements in order of size, from small to large. Our goal is to gradually increase the scale of design services as customers enter the website, while helping them find the perfect fit for their needs without overwhelming them with pricing information.
<br/><br/>
Since many customers may not be familiar with the design subscription model, providing a user scenario example can help them understand how simple it is. Rather than using a complicated dashboard to browse through various options, customers can simply request a quick and visually appealing design by sending a few text messages.
            </p>
            <div className="grid grid-cols-2 p-4 bg-black/10 rounded-xl my-4 transition-all">
              <div className="col-span-1">
                {" "}
                <img
                  src={Ideation9}
                  alt="Main image of Urdesign on laptop"
                  className=" object-contain rounded-l-lg "
                />
              </div>
              <div className="col-span-1">  
                {" "}
                <img
                  src={Ideation10}
                  alt="Main image of Urdesign on laptop"
                  className=" object-contain rounded-r-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-16">
          <div className=" col-span-1">
          <p className=" text-md sticky top-32 mb-12 text-black/80 inline-block px-4  border-r-2 border-[#7d7d7d]">
              Strategy
            </p>
          </div>

          <div className=" col-span-3">
            <p className="text-md  py-2">
            To assess the feasibility and value of this business idea for the local community, we need to establish a simple and precise key metric that will enable us to achieve our objectives efficiently.
            <br/><br/>
<p className="text-2xl my-4 px-4 py-1 rounded-full bg-blue-500 text-white inline">Goal: Earn $1</p>
<br/><br/>
I've created Stripe products that correspond to each design service. When a user clicks "Learn More," they'll be taken to a subscription pricing page with individual prices. Will they need to click two or three times to get there? Yes, but it's important to keep the information in a dedicated conversion section as much as possible. If users are already familiar with what they're getting and just want to learn a little more about it, such as delivery times, number of revisions, drafts, and pricing, then the extra click will be worth it.
<br/><br/>
To attract visitors to our website, we need effective marketing strategies. In pursuit of this goal, I have joined multiple small business Facebook groups and independent local websites to post small advertisements about [urdesign.co](http://urdesign.co/), which offers the fastest and highest-quality design outcomes to empower businesses and products to grow. However, posting ads alone is not sufficient to drive traffic to our website and showcase our offerings. How can we boost website traffic?

            </p>
            <div className="grid grid-rows-3 gap-2 py-8">
              <div className=" row-span-1 px-4 py-2 rounded-xl bg-black/5 text-black  inline-block text-sm w-1/2">
              Design an eye-catching social media advertisement that<br/> sparks interest and encourages potential customers to learn more.
              </div>
              <div className=" row-span-1 px-4 py-2 rounded-xl bg-black/5 text-black   inline-block text-sm w-1/2">
              Provide a freebie that can help grow their business, such as a complimentary photoshoot.
              </div>
              <div className=" row-span-1 px-4 py-2 rounded-xl bg-black/5 text-black  inline-block text-sm w-1/2">
              Offer an irresistible price point with a <br/>strong selling point to seal the deal.
              </div>
            </div>
            <p className="border-[1px] px-4 py-1 rounded-full inline-block">Visit Website -&gt;</p>
          </div>
        </div>

      </div>

      <Together />
    </div>
  );
};

export default Urdesign;
