import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSteam,
} from "react-icons/fa";
import HumanImage from "@/assets/images/Lunas.png";
import AnimatedText from "@/components/AnimatedText";

const Home = () => {
  return (
    <>
      {" "}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <img
            src={HumanImage}
            alt="Profile"
            className="w-32 sm:w-36 md:w-40 lg:w-48 h-auto rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover animate-fadeUp"
            style={{ animationDelay: "0.2s" }}
          />
          <h1
            className="text-4xl md:text-4xl font-extrabold mb-4 animate-fadeUp font-mono"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Hi, I'm{" "}
            <span className="text-indigo-500">
              <AnimatedText
                texts={["Danielle Ledesma Lunas", "Casual Dota Player"]}
              />
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-gray-300 mb-6 animate-fadeUp font-mono"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Aspiring{" "}
            <span className="text-indigo-400">
              Back-End Developer | IT Support Specialist
            </span>
          </p>
          <div
            className="flex justify-center space-x-6 mb-8 animate-fadeUp font-mono"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <a
              href="https://www.facebook.com/mnemosynedan.06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/miracl3_dreams/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition"
            >
              <FaInstagram size={28} />
            </a>
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
            <a
              href="https://steamcommunity.com/id/mnemosynedan06/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition"
            >
              <FaSteam size={28} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
