import React from "react";

const Contact = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-700 to-black text-white flex items-center justify-center px-6">
        <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Your message..."
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
