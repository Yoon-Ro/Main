import React, { useState, useEffect } from "react";
import { navLinks } from "../../Data";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [active, setActive] = useState(null);

  useEffect(
    () => {
      const scrollActive = () => {
        setActive(window.scrollY > 20);
      };

      window.addEventListener("scroll", scrollActive);
      return () => window.removeEventListener("scroll", scrollActive);
    },
    { active }
  );

  return (
    <div
      className={`${
        active ? "  " : ""
      } fixed  inset-x-0 justify-center top-0 left-0 right-0 z-20 `}
    >
      <div>
        <div
          className={`${
            active ? "py-4" : "py-4 transition-all duration-125"
          } w-fit py-1 mx-auto flex items-center justify-center px-1 mt-8 bg-[#ededed]/70 backdrop-blur  shadow-2xl rounded-full `}
        >
          <div className="flex gap-4 items-center justify-between "> <Link to="/">
            <h1 className="text-sm rounded-full  px-10 py-[5px] hover:bg-white hover:text-black text-[#0000007c]">
             
                <BsArrowLeftShort className="text-lg" />
              
            </h1>
            </Link>
            <h1 className=" text-sm rounded-full px-8 py-1 text-[#0000007c] hover:bg-blue-200 hover:text-blue-700 transition-all duration-100">
              <Link to="/me">About</Link>
            </h1>
            <h1 className=" text-sm rounded-full px-8 py-1 text-[#0000007c]">
              <Link to="/me">Resume</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;