import React from "react";
import web1 from "../../assets/web1.jpeg";
import web2 from "../../assets/web2.jpeg";
import web3 from "../../assets/web3.jpeg";
import web4 from "../../assets/web4.jpeg";
import web5 from "../../assets/web5.jpeg";
import web6 from "../../assets/web6.jpeg";
import web7 from "../../assets/web7.jpeg";
import web8 from "../../assets/web8.jpeg";
import web9 from "../../assets/web9.jpeg";
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
      <div className="w-3/4  mx-auto my-16">
        <p1 className="text-4xl  sm:text-[64px] font-medium ">Design</p1> 
        <p className="pl-1 pt-2">website + graphic</p>
        <div className="px-12 sm:px-0  flex justify-between sm:gap-16">
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
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                
                               <div class=" flex justify-evenly ">
                                    <p class="text-md text-black font-medium">
                                    <Link to="/Newton" preventScrollReset={false}>
                                        iPhone price indice website
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
                        <a href="https://www.behance.net/gallery/160635609/CleanDay-Website" target="_blank">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-md text-black font-medium">
                                        Laundry delivery service website
                                    </p>

                                </div>
                            </div>
                        </div>
                        </a>
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
                        <a href="https://www.behance.net/gallery/163734007/Blockchain-Education-Website-Cloning-Frontend" target="_blank">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-md text-black font-medium">
                                        learning website interaction cloning
                                    </p>

                                </div>
                            </div>
                        </div>
                        </a>
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
                        <a href="https://www.behance.net/gallery/164365683/ROGO-Juice-Concept-Website-Design" target="_blank">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-md text-black">
Organic juice website                              </p>

                                </div>
                            </div>
                        </div>
                        </a>
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
                        <a href="https://www.behance.net/gallery/168357231/Yoga-Studio-website-design-and-front-end-development" target="_blank">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-md text-black">
                                        Yoga fitness website
                                    </p>

                                </div>
                            </div>
                        </div>
                        </a>
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
                        <a href="https://www.behance.net/gallery/164191445/Design-Development-Online-Course-Website" target="_blank">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-md text-black">
                                        Online Course Landing Page
                                    </p>

                                </div>
                            </div>
                        </div>
                        </a>
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
                        <a href="https://www.letsdive.io/ai" target="_blank">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-md text-black">
Website animation graphic contents                                   </p>

                                </div>
                            </div>
                        </div>
                        </a>
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
                        <a href="https://www.behance.net/gallery/164841083/Website-concept-redesign-credit-card" target="_blank">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-[#eaeaea]/20 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-md text-black">
                                        Credit card landing page
                                    </p>

                                </div>
                            </div>
                        </div>
                        </a>
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
