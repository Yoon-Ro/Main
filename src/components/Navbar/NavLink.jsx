import React from 'react';
import { Link } from "react-scroll";

const NavLink = ({design, Design}) => {
  return (
    <li className='list-none p-4 shadow-md text-sm font-regular
  '>
        <Link to={design} spy={true} smooth={true} duration={500} offset={-50} className="font-bold transition-all duration-300">{Design}</Link>
    </li>
  )
}

export default NavLink 