import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import { Routes, Route } from "react-router-dom";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Pitch from "./components/Pitch";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Bio />} />
        <Route path="/pitch" element={<Pitch />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
      {/* <Navbar />
      <Hero />
      <Bio />
      <Skills/>
      <Work/>
      <Contact/> */}
    </div>
  );
}

export default App;
