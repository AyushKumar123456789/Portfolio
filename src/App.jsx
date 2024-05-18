import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio.jsx/Portfolio";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
