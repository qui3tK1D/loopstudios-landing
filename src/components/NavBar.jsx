import React, { useState } from "react";
import { logo } from "../assets/images";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flexBetween pt-12">
        <img src={logo} alt="loopstudios" className="h-7" />
        <NavLinks style="hidden md:flex" />
        <div className="md:hidden">
          <button
            id="menu-btn"
            type="button"
            className={`${
              isMobileMenuOpen && "open"
            } z-40 block hamburger md:hidden focus:outline-none`}
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
      {<MobileMenu isMobileMenuOpen={isMobileMenuOpen} />}
    </>
  );
};

export default NavBar;
