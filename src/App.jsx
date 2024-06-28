import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Books from "./components/Hobbies/Books";
import Movies from "./components/Hobbies/Movies";
import Blogs from "./components/Hobbies/Blogs";

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
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <About />
                <Portfolio />
                <Experience />
                <Contact />
                <SocialLinks />
              </>
            }
          />
          <Route path="/books" element={<Books />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </theme.Provider>
  );
}

export default App;
