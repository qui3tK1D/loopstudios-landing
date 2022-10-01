import React from "react";
import { links } from "../constants";

const NavLinks = (props) => {
  return (
    <ul className={`${props.style} font-alata space-x-0 md:space-x-8`}>
      {links.map((link) => (
        <li key={link.id} className="group h-8">
          <a href={`#${link.id}`} className="text-white">
            {link.title}
          </a>
          <div className="mt-1 mx-2 group-hover:border-b-2 group-hover:border-white"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
