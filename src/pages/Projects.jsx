import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work and skills.",
    link: "#",
  },
  {
    title: "Task Manager App",
    description: "A full-stack web app built with React and Laravel.",
    link: "#",
  },
  {
    title: "E-commerce Demo",
    description: "A mock online shop built using modern frontend tools.",
    link: "#",
  },
];

const Project = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-6 py-20">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          My Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
