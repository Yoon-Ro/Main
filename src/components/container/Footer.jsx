import React from "react";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillBehanceCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#fff3e5]">
    <div className="mx-auto w-3/4 bg-[#fff3e5]">
      <motion.div
        initial={{ scale: 4 / 5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className=" pb-8 flex justify-between px-4 text-center items-center  bg-white/10 text-black rounded-[2rem]"
      >
        <ul className="flex gap-8 items-center">
          <li className="text-xl px-6 sm:py-2  bg-white rounded-full hover:bg-black hover:text-white shadow-2xl">
            {" "}
            <a href="https://drive.google.com/file/d/1_O4BZHFHpNtUzsTaSmd40vMtDVSjTg3a/view?usp=sharing" target="_blank">
              Resume
            </a>
          </li>
          <a
            href="https://www.linkedin.com/in/yoon-ro-ab4838124/"
            target="_blank"
          >
            <AiFillLinkedin className="text-3xl pointer" />
          </a>
          <a href="https://www.behance.net/yoonro" target="_blank">
            <AiFillBehanceCircle className="text-3xl" />
          </a>
          <a href="https://twitter.com/Yoon_ro_" target="_blank">
            <AiFillTwitterCircle className="text-3xl" />
          </a>
        </ul>
        <li className="right-0 list-none text-xl px-6 sm:py-2   text-white rounded-full bg-[#507efc] hover:bg-[#4474f8] hover:text-white shadow-2xl">
            {" "}
            <a href="mailto:designer@yoonro.com" target="_blank">
              Contact
            </a>
          </li>
      </motion.div>
    </div>
    </div>
  );
};

export default Footer;
