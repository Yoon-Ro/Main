import React from 'react'
import {motion} from "framer-motion";

const About2 = () => {
    const box = {
        hidden: {
          opacity: 0,
          scale: 1,
          y: 20

        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
       


        },
      };
  return (
    <div className='sm:w-[1420px] mx-auto'>
        <p className='px-16 w-4/5 sm:px-0 text-xl sm:w-3/5 py-8'>I have a strong understanding of business needs and brand identity. I am proficient in using Figma, Adobe, and Front-end development for digital products. This has allowed me to create functional and visually pleasing products.</p>
                   <div className='sm:px-0 px-12 grid sm:grid-cols-3 gap-8'>
                   <motion.div 
                        variants={box}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 shadow-sm px-4 py-8 bg-slate-200 rounded-[2rem]">
           
                <ul>
                    <h1 className='text-4xl font-medium py-1 border-b-1 pb-8'>UIUX Design</h1>
                    <li className='py-1 '>UX Research</li>
                    <li className='py-1 '>Wireframe</li>
                    <li className='py-1 '>High-fidelity designs</li>
                </ul>
            </motion.div>

                               <motion.div 
                        variants={box}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 shadow-sm px-4 py-8 bg-slate-100 rounded-[2rem]">
           
            <ul>
                    <h1 className='text-4xl font-medium py-1 border-b-1 pb-8'>Web Development</h1>
                    <li className='py-1 '>React JavaScript</li>
                    <li className='py-1 '>HTML & CSS</li>
                </ul>
                </motion.div>
                <motion.div 
                        variants={box}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{ delay: 0.5 }}
                        className="col-span-1 shadow-sm px-4 py-8 bg-slate-100/50 rounded-[2rem]">
           
            <ul>
                    <h1 className='text-4xl font-medium py-1 border-b-1 pb-8'>Graphic Design</h1>
                    <li className='py-1 '>Web Contents</li>
                    <li className='py-1 '>Marketing Graphics</li>
                </ul>
                </motion.div>
           </div>

    </div>
  )
}

export default About2