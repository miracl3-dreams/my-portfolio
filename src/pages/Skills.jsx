import React from "react";

const allSkills = [
  { name: "Python", icon: "/icons/python.png", type: "technology" },
  { name: "FastAPI", icon: "/icons/fastapi.png", type: "technology" },
  { name: "PHP", icon: "/icons/php.png", type: "technology" },
  { name: "Laravel", icon: "/icons/laravel.png", type: "technology" },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss.png",
    type: "technology",
  },
  { name: "Next.js (Studying)", icon: "/icons/nextjs.png", type: "technology" },
  { name: "Node.js", icon: "/icons/nodejs.png", type: "technology" },
  { name: "React", icon: "/icons/react.png", type: "technology" },
  { name: "ASP.NET", icon: "/icons/aspnet.png", type: "technology" },
  { name: "MySQL", icon: "/icons/mysql.png", type: "technology" },
  {
    name: "PostgreSQL (CS)",
    icon: "/icons/postgresql.png",
    type: "technology",
  },
  { name: "HeidiSQL", icon: "/icons/heidisql.png", type: "technology" },
  { name: "XAMPP", icon: "/icons/xampp.png", type: "technology" },
  { name: "Postman", icon: "/icons/postman.png", type: "tool" },
  { name: "Laragon", icon: "/icons/laragon.png", type: "tool" },
  { name: "VS Code", icon: "/icons/vscode.png", type: "tool" },
  { name: "Github", icon: "/icons/github.png", type: "tool" },
  { name: "Vercel", icon: "/icons/vercel.png", type: "tool" },
  { name: "Netlify", icon: "/icons/netlify.png", type: "tool" },
];

const groupedSkills = {
  Technology: allSkills.filter((skill) => skill.type === "technology"),
  Tools: allSkills.filter((skill) => skill.type === "tool"),
};

const icons = {
  Technology: (
    <svg
      className="w-6 h-6 mr-2 text-blue-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  Tools: (
    <svg
      className="w-6 h-6 mr-2 text-green-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a1 1 0 00-1.4 0l-9 9a1 1 0 000 1.4l3 3a1 1 0 001.4 0l9-9a1 1 0 000-1.4l-3-3z"
      />
    </svg>
  ),
};

const Skills = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-700 to-black py-10 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12 font-mono">
          My Skills
        </h2>
        <div className="space-y-12 max-w-6xl mx-auto">
          {Object.entries(groupedSkills).map(([category, skills], index) => (
            <div key={index}>
              <div className="flex items-center mb-4 border-l-4 border-blue-500 pl-3">
                {icons[category]}
                <h3 className="text-2xl font-semibold text-blue-800 font-mono">
                  {category}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition p-4"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-16 h-16 object-contain mb-2"
                    />
                    <span className="text-base   font-medium text-black font-mono">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
