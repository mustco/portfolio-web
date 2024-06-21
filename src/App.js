import "./App.css";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skill from "./components/Skill/Skill";
import About from "./components/About/About";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
    });
  }, []);
  return (
    <>
      <Home />
      <Project />
      <Experience />
      <Education />
      <Skill />
      <About />
      <Footer />
    </>
  );
}

export default App;
