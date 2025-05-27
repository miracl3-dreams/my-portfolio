import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-br from-gray-700 to-black text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold mb-2 font-mono">Danielle Lunas Portfolio</h2>
            <p className="text-gray-300 text-sm font-mono">
              Thank you for visiting! Connect with me through my social channels
              or shoot me an email.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 font-mono">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="/home" className="hover:text-blue-300 font-mono">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-300 font-mono">
                  About
                </a>
              </li>
              <li>
                <a href="/skills" className="hover:text-blue-300 font-mono">
                  Skills
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-blue-300 font-mono">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 font-mono">Connect to me with these channels.</h3>
            <div className="flex justify-center md:justify-start gap-4 text-xl">
              <a
                href="https://github.com/miracl3-dreams"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-blue-300 font-mono" />
              </a>
              <a
                href="https://www.linkedin.com/in/danielle-lunas-395025280/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-300 font-mono" />
              </a>
              <a
                href="https://www.facebook.com/mnemosynedan.06/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-blue-300 font-mono" />
              </a>
              <a href="mailto:lunas.danielle.10262002@gmail.com">
                <FaEnvelope className="hover:text-blue-300 font-mono" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-700 pt-10 text-center text-sm text-gray-400 font-mono">
          &copy; {new Date().getFullYear()} Danielle Lunas. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
