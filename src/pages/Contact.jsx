import React from "react";
import AnimatedText from "@/components/AnimatedText";

const Contact = () => {
  return (
    <>
      <div className="h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-center px-4 py-4">
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-black dark:border-white transition-all">
          <h2
            className="text-3xl md:text-2xl font-bold animate-fadeUp font-mono min-h-[50px] md:min-h-[50px] text-center justify-center"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            {" "}
            <span className="text-indigo-400 inline-block">
              <AnimatedText
                texts={["Let me know if you're interested!"]}
              />
            </span>
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium dark:text-white text-black font-mono">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-black text-white border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-white/60"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium dark:text-white text-black font-mono">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-black text-white font-mono border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-white/60"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium dark:text-white text-black font-mono">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                className="w-full h-28 px-4 py-3 bg-black text-white font-mono border border-white/30 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-white/60"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-40 bg-indigo-400 hover:bg-indigo-700 text-white font-mono py-3 rounded-xl font-bold shadow-md hover:scale-105 hover:shadow-lg transition transform duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
