import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-indigo-400 text-white py-6 px-4">
        <div className="text-center text-sm text-black dark:text-black font-mono">
          &copy; {new Date().getFullYear()} Danielle Lunas. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
