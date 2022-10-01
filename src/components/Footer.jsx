import React from "react";
import { logo } from "../assets/images";
import NavLinks from "./NavLinks";
import { socailIcons } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="section text-white">
        <div className="py-12 pb-10 space-y-8 flex flex-col justify-between items-center md:flex-row md:space-y-0">
          <div className="space-y-8">
            <img src={logo} className="h-7" alt="loopstudio" />
            <NavLinks style="flex flex-col md:flex-row items-center space-y-3 md:space-y-0" />
          </div>

          <div className="space-y-3">
            <ul className="flex space-x-4 items-center justify-center md:justify-end">
              {socailIcons.map((icon) => (
                <li key={icon.id} className="group h-8">
                  <a href={`#${icon.id}`} className="text-white">
                    <img src={icon.icon} alt={icon.title} />
                  </a>
                  <div className="mt-2 group-hover:border-b-2 group-hover:border-white"></div>
                </li>
              ))}
            </ul>
            <p className="text-dark-gray font-alata text-right">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
