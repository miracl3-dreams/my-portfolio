import React from "react";
import { motion } from "framer-motion";
import CatImage from "@/assets/images/Cat.png";
import ResumePdf from "@/assets/documents/resume.pdf";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center px-6">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="w-40 h-40 md:w-60 md:h-60 flex-shrink-0 overflow-hidden rounded-full border-4 border-blue-400 shadow-xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={CatImage}
              alt="Danielle"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h2
              className="text-4xl font-extrabold text-blue-800 mb-4 font-mono"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-gray-700 text-lg leading-relaxed font-mono"
              variants={itemVariants}
            >
              Hello everyone! I'm{" "}
              <span className="font-semibold text-blue-700 font-mono">
                Danielle
              </span>{" "}
              but you can call me{" "}
              <span className="font-semibold text-blue-700 font-mono">
                Dan.
              </span>
            </motion.p>
            <motion.p
              className="text-gray-700 text-lg leading-relaxed mt-3 font-mono"
              variants={itemVariants}
            >
              I am a graduate of BSIT course at Quezon City University.
            </motion.p>
            <motion.p
              className="text-gray-700 text-lg leading-relaxed mt-3 font-mono"
              variants={itemVariants}
            >
              I always strive to learn new technologies and improve my skills.
            </motion.p>
            <motion.p
              className="text-gray-600 text-base mt-4 font-mono"
              variants={itemVariants}
            >
              I specialize in{" "}
              <span className="font-extrabold text-xl text-blue-700 font-mono">
                React, Tailwind CSS, Laravel, FastAPI
              </span>
              , and many more. I enjoy crafting full-stack applications from scratch.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href={ResumePdf}
                download="Danielle_Lunas_Resume.pdf"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold font-mono py-3 px-6 rounded-full mt-6 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
