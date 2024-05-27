import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio.jsx/Portfolio";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";

import { theme_context, theme } from "./Context/Conetext";

function App() {
  const [current_theme, setcurrent_theme] = useState("light");

  const darkMode = () => {
    setcurrent_theme("dark");
  };
  const lightMode = () => {
    setcurrent_theme("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(current_theme);
  }, [current_theme]);
  return (
    <theme.Provider value={{ current_theme, darkMode, lightMode }}>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </theme.Provider>
  );
}

export default App;
