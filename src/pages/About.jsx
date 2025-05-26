import React from "react";
import CatImage from "@/assets/images/Cat.png";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 px-6 py-20 flex items-center justify-center">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10">
          <div className="w-40 h-40 md:w-60 md:h-60 flex-shrink-0">
            <img
              src={CatImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-blue-300 shadow-md"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">About Me</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Hello! I'm{" "}
              <span className="font-semibold text-blue-700">Danielle</span>, a
              passionate web developer and creative designer. I love building
              beautiful, user-friendly websites and turning ideas into
              functional products.
            </p>
            <p className="text-gray-600 mt-4">
              I specialize in{" "}
              <span className="font-medium text-blue-700">
                React, Tailwind CSS, Laravel
              </span>
              , and enjoy working on both frontend and backend development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
