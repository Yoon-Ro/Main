import React from "react";
import web1 from "../../assets/web1.png";
import web2 from "../../assets/web2.png";
import web3 from "../../assets/web3.png";
import web4 from "../../assets/web4.png";
import web5 from "../../assets/web5.png";
import web6 from "../../assets/web6.png";
import web7 from "../../assets/web7.png";
import web8 from "../../assets/web8.png";
import web9 from "../../assets/web9.png";
import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Work = () => {
  const { ref } = useParallax({ speed: 20 });
  const box = {
    hidden: {
      opacity: 0,
      scale: 1,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  return (
    <div id="design">
      <div className="w-full sm:w-[1420px] mx-auto my-8">
        <p1 className="text-4xl  sm:text-[64px] font-medium ">Design</p1> 
        <p className="pl-1 pt-2">website + graphic</p>
        <div className="px-12 sm:px-0 sm:flex flex-row justify-between sm:gap-16">
          <div>


          <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  sm:py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{web1} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/80 backdrop-blur p-4 rounded-full shadow-xl ">
                                
                               <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black font-medium">
                                    <Link to="/Newton" preventScrollReset={false}>
                                        Newton Index - Case Study
                                        </Link>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>



            <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{web2} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/80 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black font-medium">
                                        concept website design
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>
            <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{web3} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/80 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black font-medium">
                                        concept website design
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>
          </div>

          <div ref={ref} className="mt-[4rem] ">
          <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{web4} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black">
Bank Credit Card Concept Design                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>
            <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{web5} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black">
                                        Online Course Landing Page
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>
            <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{web6} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black">
                                        Online Course Landing Page
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>
          </div>
          <div className="mt-[-8rem] ">
          <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{web7} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black">
BAF Interaction Cloning                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>
            <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{web8} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-[#eaeaea]/20 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black">
                                        Laundry Delivery Concept Design
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>
            <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 transition-all hover:cursor-pointer "
                        src=
{web9} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">

                        </div>
                    </div>
                </a>
            </div>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Work;
