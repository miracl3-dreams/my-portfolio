import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSteam,
  FaUserCircle,
  FaPaperPlane,
  FaTimes,
} from "react-icons/fa";
import HumanImage from "@/assets/images/Lunas.png";
import AnimatedText from "@/components/AnimatedText";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const messagesEndRef = useRef(null);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatLog]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed) return;

    setChatLog((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");

    try {
      const res = await fetch("https://python-chatbot-be.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();

      setChatLog((prev) => [...prev, { from: "bot", text: data.response }]);
    } catch (error) {
      setChatLog((prev) => [
        ...prev,
        { from: "bot", text: "Oops! Something went wrong. Please try again." },
      ]);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

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

      <button
        onClick={toggleForm}
        title="Chat on my Chatbot"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <FaUserCircle size={24} />
      </button>

      {showForm && (
        <div className="fixed bottom-20 right-6 z-50 w-80 max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col">
          <div className="flex items-center justify-between p-3 border-b border-gray-300 dark:border-gray-700">
            <h2 className="font-bold text-lg text-green-600">Miracle Chatbot</h2>
            <button onClick={toggleForm} title="Close Chat" className="text-gray-600 dark:text-gray-300 hover:text-red-500">
              <FaTimes size={20} />
            </button>
          </div>

          <div
            className="flex-grow p-3 overflow-y-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-100 dark:scrollbar-track-gray-700"
            style={{ maxHeight: "300px" }}
          >
            {chatLog.length === 0 && (
              <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                Say hi to Miracle! 👋
              </p>
            )}
            {chatLog.map((msg, idx) => (
              <div
                key={idx}
                className={`my-1 p-2 rounded-md ${
                  msg.from === "user"
                    ? "bg-green-100 text-green-900 text-right"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-left"
                }`}
              >
                <strong>{msg.from === "user" ? "You" : "Miracle"}:</strong>{" "}
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex p-3 border-t border-gray-300 dark:border-gray-700">
            <input
              type="text"
              className="flex-grow px-3 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 focus:outline-none"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <button
              onClick={sendMessage}
              className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-r-md transition"
              title="Send message"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
