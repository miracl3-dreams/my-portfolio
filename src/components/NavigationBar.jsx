import React, { useState } from "react";
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
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-black dark:hover:text-black hover:underline underline-offset-4">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-black dark:hover:text-black hover:underline underline-offset-4">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-black dark:hover:text-black hover:underline underline-offset-4">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-black dark:hover:text-black hover:underline underline-offset-4">
          <a href="#contacts">Contacts</a>
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
          <a href="#home" onClick={closeMobileMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMobileMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMobileMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMobileMenu}>
            Projects
          </a>
          <a href="#contacts" onClick={closeMobileMenu}>
            Contacts
          </a>
          <DarkMode />
        </div>
      )}
    </>
  );
};

export default NavigationBar;
