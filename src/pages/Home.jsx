import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import CatImage from "@/assets/images/Cat.png"; 

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <img
            src={CatImage}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hi, I'm <span className="text-indigo-500">Danielle Ledesma Lunas</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            I'm a passionate{" "}
            <span className="text-indigo-400">Full-Stack Developer</span><br></br>
            who builds beautiful and functional web applications.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-white hover:text-indigo-400 transition"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            View Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
