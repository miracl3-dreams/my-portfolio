import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work and skills.",
    link: "https://lunas-portfolio.vercel.app/",
    image: "/images/portfolio.PNG", 
  },
  {
    title: "Task Manager App",
    description: "A full-stack web app built with React and Laravel.",
    link: "https://github.com/cacaogoldxyz/cacao-god-fe",
    image: "/images/taskmanagement.PNG",
  },
  {
    title: "E-commerce Platform",
    description: "A mock online shop built using modern frontend tools.",
    link: "https://aag-e-commerce.netlify.app/home",
    image: "/images/ecommerce.PNG",
  },
];

const Project = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black px-6 py-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 font-mono">My Projects</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-blue-400 mb-2 font-mono">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 font-mono">{project.description}</p>
            <a
              href={project.link}
              className="inline-flex items-center text-blue-300 font-mono font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <FaExternalLinkAlt className="ml-2" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
