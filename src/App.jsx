import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import CodingPlatforms from "./sections/CodingPlatforms";
import Extracurricular from "./sections/Extracurricular";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import CV from './sections/CV';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <CodingPlatforms />
      <Extracurricular />
      <Experiences />
      <CV />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
