import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "@/components/NavigationBar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
