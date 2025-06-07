import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-900 text-white py-6 px-4">
        <div className="text-center text-sm text-gray-300 dark:text-gray-400 font-mono">
          &copy; {new Date().getFullYear()} Danielle Lunas. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
