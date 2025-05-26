import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-900 text-white py-10 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold mb-2">Luna's Portfolio</h2>
            <p className="text-gray-300 text-sm">
              Thank you for visiting! Connect with me through my social channels
              or shoot me an email.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="/home" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-300">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-blue-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Connect</h3>
            <div className="flex justify-center md:justify-start gap-4 text-xl">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-blue-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-300" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-blue-300" />
              </a>
              <a href="mailto:youremail@example.com">
                <FaEnvelope className="hover:text-blue-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Danielle Lunas. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
