import React from "react";
import TEST from "../../assets/TESTIMAGE.jpeg";
import TEST2 from "../../assets/TESTIMAGE2.jpeg";
import { Link } from "react-router-dom";

import { useParallax } from "react-scroll-parallax";

const Work = () => {
  return (
    <div id="design">
      <div className="w-full md:w-3/4  mx-auto md:my-16 md:pb-32 ">
        <div className="grid md:grid-cols-2 gap-4 ">
          <div className="col-span-1 group">
            <div className=" overflow-clip rounded-xl ">
              <img
                src={TEST2}
                alt="/"
                className=" group-hover:scale-110 transition-all duration-150 "
              />
            </div>
            <div className="py-0  relative">
              <p className="text-4xl py-4">Urdesign.co</p>
              <p className="text-sm text-black/60">(Business Development)</p>
              <p className="text-sm py-4 w-2/3">
                Productized design subscription buisness model
               for local small businessed to empower their business
                through well-curated and fast-paced design outcome.
              </p>
              <Link to="/Urdesign">
                <button className="px-6 py-1 bg-blue-500 rounded-full inline-block font-normal tracking-wide text-sm text-white  hover:bg-blue-600 transition-all duration-125 hover:scale-105 ">
                  Read More
                </button>
              </Link>
            </div>
          </div>
          <div className="col-span-1 group">
            <div className=" overflow-clip rounded-xl ">
              <img
                src={TEST}
                alt="/"
                className=" group-hover:scale-110 transition-all duration-150 "
              />
            </div>
            <div className="py-0  relative">
              <p className="text-4xl py-4">Newton Index</p>
              <p className="text-sm text-black/60">(Product&Web Design)</p>
              <p className="text-sm py-4 w-2/3">
                Newton Index provides the most accurate and up-to-date
                information of used iPhone price to make informed decisions by
                users while purchasing used iPhones.
              </p>
              <button className="px-6 py-1 bg-blue-500 rounded-full inline-block font-normal tracking-wide text-sm text-white  hover:bg-blue-600 transition-all duration-125 hover:scale-105">
                {" "}
                <Link to="/Newton">Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
