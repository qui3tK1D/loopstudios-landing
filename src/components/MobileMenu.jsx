import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../assets/images";
import { links } from "../constants";
import useWindowResize from "../hooks/useWindowResize";

const container = {
  hidden: { x: "-100%", opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 30,
      delayChildren: 0.7,
      staggerChildren: 0.1,
    },
  },
  out: {
    x: "-100%",
    transition: {
      duration: 0.7,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { x: -40, opacity: 0 },
  show: { x: 0, opacity: 1 },
  out: { x: -40, opacity: 0 },
};

const MobileMenu = ({ isMobileMenuOpen }) => {
  const size = useWindowResize();
  console.log(size);

  return (
    <AnimatePresence>
      {isMobileMenuOpen && size < 768 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="out"
          className="mobileMenu"
        >
          <img src={logo} alt="loopstudios" className="w-40 mt-12 ml-6" />
          <ul className="text-white font-josefin text-lg uppercase space-y-3 pl-6 mb-52">
            {links.map((link) => (
              <motion.li key={link.id} variants={item}>
                <a href={`#${link.id}`} className="hover:text-pink-500">
                  {link.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
