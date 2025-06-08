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
      <section
        id="home"
        className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-center px-6"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl w-full gap-10 md:gap-20 p-6 md:p-10 bg-white/10 backdrop-blur-md rounded-3xl dark:border-white transition-all font-mono">
          <div className="md:w-1/2 text-left space-y-6">
            <h1
              className="text-3xl md:text-3xl font-extrabold animate-fadeUp font-mono min-h-[60px] md:min-h-[72px]"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Hi, I'm{" "}
              <span className="text-indigo-400 inline-block">
                <AnimatedText
                  texts={["Danielle Ledesma Lunas", "Casual Dota Player"]}
                />
              </span>
            </h1>
            <p
              className="text-lg md:text-xl animate-fadeUp font-mono"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              Aspiring{" "}
              <span className="text-indigo-900 dark:text-indigo-400 items-center justify-center">
                Back-End Developer | IT Support
              </span>
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fadeUp font-mono items-center justify-center"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              {[
                {
                  href: "https://www.facebook.com/mnemosynedan.06",
                  icon: <FaFacebook size={28} />,
                },
                {
                  href: "https://www.instagram.com/miracl3_dreams/",
                  icon: <FaInstagram size={28} />,
                },
                {
                  href: "https://github.com/miracl3-dreams",
                  icon: <FaGithub size={28} />,
                },
                {
                  href: "https://www.linkedin.com/in/danielle-lunas-395025280/",
                  icon: <FaLinkedin size={28} />,
                },
                {
                  href: "mailto:lunas.danielle.10262002@gmail.com",
                  icon: <FaEnvelope size={28} />,
                },
                {
                  href: "https://steamcommunity.com/id/mnemosynedan06/",
                  icon: <FaSteam size={28} />,
                },
              ].map(({ href, icon }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-indigo-400 transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-start md:pl-10">
            <img
              src={HumanImage}
              alt="Profile"
              className="rounded-full border-[#222831] dark:border-[#EEEEEE] border-4 hover:border-4 lg:hover:border-8 shadow-lg object-cover ease-in-out duration-150 animate-fadeUp
               h-[150px] w-[150px] md:h-[360px] md:w-[360px] xl:h-[480px] xl:w-[480px]"
              style={{ animationDelay: "0.2s" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
