import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import CatImage from "@/assets/images/Cat.png";
import ResumePdf from "@/assets/documents/resume.pdf";
import AnimatedText from "@/components/AnimatedText";

const Home = () => {
  return (
    <>
      {" "}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <img
            src={CatImage}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg animate-fadeUp"
            style={{ animationDelay: "0.2s" }}
          />
          <h1
            className="text-4xl md:text-4xl font-extrabold mb-4 animate-fadeUp"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Hi, I'm{" "}
            <span className="text-indigo-500">
              <AnimatedText texts={["Danielle Ledesma Lunas", "Casual Dota Player"]} />
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-gray-300 mb-6 animate-fadeUp"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            I'm a passionate{" "}
            <span className="text-indigo-400">Full-Stack Developer</span>
            <br />
            who builds beautiful and functional web applications.
          </p>
          <div
            className="flex justify-center space-x-6 mb-8 animate-fadeUp"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <a
              href="https://github.com/miracl3-dreams"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/danielle-lunas-395025280/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:lunas.danielle.10262002@gmail.com"
              className="text-white hover:text-indigo-400 transition"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
          <a
            href={ResumePdf}
            download="Danielle_Lunas_Resume.pdf"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition animate-fadeUp"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            Download Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
