import React, { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_avbezfr",
        "template_j26yf8c",
        formData,
        "j5pcehp2zcRo4NGtb"
      )
      .then(
        () => {
          toast.success("Customer feedback sent successfully!", {
            position: "top-right",
            autoClose: 4000,
            theme: "colored",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 6000,
            theme: "colored",
          });
        }
      );
  };

  return (
    <>
      <div
        id="contacts"
        className="h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center px-4 py-4 relative"
      >
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-black dark:border-white transition-all">
          <h2
            className="text-3xl md:text-2xl font-bold animate-fadeUp font-mono min-h-[50px] md:min-h-[50px] text-center justify-center"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <span className="text-black dark:text-white inline-block">
              <AnimatedText texts={["Let me know if you're interested!"]} />
            </span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <div>
              <label className="block mb-1 text-sm font-medium dark:text-white text-black font-mono">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Juan Dela Cruz"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black font-mono text-white border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-white/60"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium dark:text-white text-black font-mono">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="delacruz@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black text-white font-mono border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-white/60"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium dark:text-white text-black font-mono">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full h-28 px-4 py-3 bg-black text-white font-mono border border-white/30 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-white/60"
                required
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

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          style={{ zIndex: 9999 }} 
        />
      </div>
    </>
  );
};

export default Contact;
