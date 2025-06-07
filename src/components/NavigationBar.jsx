import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import DarkMode from "../components/Darkmode";

const NavigationBar = () => {
  const [mobileView, setMobileView] = useState(false);

  const toggleMobileMenu = () => {
    setMobileView((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileView(false);
  };

  return (
    <>
      <ul className="hidden lg:flex fixed top-5 left-1/2 -translate-x-1/2 bg-indigo-400 dark:bg-black/30 backdrop-blur-lg px-10 py-3 rounded-full shadow-lg text-black dark:text-white items-center gap-8 font-bold z-50 font-mono">
        <li className="hover:text-black dark:hover:text-black hover:underline underline-offset-4">
          <Link to="/home">Home</Link>
        </li>
        <li className="hover:text-black dark:hover:text-black hover:underline underline-offset-4">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-black dark:hover:text-black hover:underline underline-offset-4">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="hover:text-black dark:hover:text-black hover:underline underline-offset-4">
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>

      <div className="lg:hidden fixed top-4 right-4 z-[100]">
        <button
          className="text-3xl text-black dark:text-white"
          onClick={toggleMobileMenu}
        >
          {mobileView ? <RxCross2 /> : <GiHamburgerMenu />}
        </button>
      </div>

      {mobileView && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center gap-8 font-bold font-mono">
          <Link to="/home" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMobileMenu}>
            About
          </Link>
          <Link to="/skills" onClick={closeMobileMenu}>
            Skills
          </Link>
          <Link to="/projects" onClick={closeMobileMenu}>
            Projects
          </Link>

          <DarkMode />
        </div>
      )}
    </>
  );
};

export default NavigationBar;
