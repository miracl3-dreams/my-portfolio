import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const NavigationBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const navigate = useNavigate();

  const handleHamburgerButton = () => {
    setMobileView((prev) => !prev);
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="bg-gradient-to-br from-gray-900 to-black flex justify-between items-center px-5 py-5 text-white">
        <ul className="hidden lg:flex fixed top-5 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg px-10 py-3 rounded-full shadow-lg text-white items-center gap-8 font-bold z-50">
          <li className="hover:text-black">
            <Link to={"home"}>Home</Link>
          </li>
          <li className="hover:text-black">
            <Link to={"about"}>About</Link>
          </li>
          <li className="hover:text-black">
            <Link to={"contact"}>Contact</Link>
          </li>
          <li className="hover:text-black">
            <Link to={"projects"}>Projects</Link>
          </li>
          <li className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleDropdown}
            ></div>
          </li>
        </ul>

        <button className="text-2xl lg:hidden" onClick={handleHamburgerButton}>
          {mobileView ? <RxCross2 /> : <GiHamburgerMenu />}
        </button>

        {mobileView && (
          <ul className="fixed left-0 top-0 z-10 bg-blue-500 flex flex-col items-center gap-5 px-10 pt-10 h-[100vh] text-white font-bold">
            <li>
              <Link onClick={handleHamburgerButton} to={"home"}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleHamburgerButton} to={"about"}>
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleHamburgerButton} to={"contact"}>
                Contact
              </Link>
            </li>
            <li>
              <Link onClick={handleHamburgerButton} to={"projects"}>
                Projects
              </Link>
            </li>
            <li className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              ></div>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavigationBar;
