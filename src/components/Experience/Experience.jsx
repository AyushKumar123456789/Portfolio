import React, { useEffect, useState } from "react";
import react_logo from "../../assets/Experience/react_logo.png";
import "./Experience.css";
import { theme_context } from "../../Context/Conetext";
import Real_Sun from "../../assets/Experience/Real_Sun.svg";

function Experience() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    createStars();
  }, []);

  const { current_theme } = theme_context();

  function createStars() {
    const starsArray = [];
    for (let i = 0; i < 1000; i++) {
      const star = {
        id: i,
        top: Math.random() * 99 + 12 + "%",
        left: Math.random() * 100 + "%",
      };
      starsArray.push(star);
    }
    setStars(starsArray);
  }

  return (
    <div
      name="experience"
      className="bg-gradient-to-b to-black from-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">Tech Stack That I Know</p>
        </div>
        <div className="sky relative">
          {current_theme == "light" &&
            stars.map((star) => (
              <div
                key={star.id}
                className="star"
                style={{
                  top: star.top,
                  left: star.left,
                  width: ".2px",
                  height: "2px",
                }}
              ></div>
            ))}
          <div className="container">
            <div className="sun dark:shadow-yellow-600 ">
              <img
                src={current_theme == "light" ? react_logo : Real_Sun}
                alt="sun"
              ></img>
            </div>
            <div className="star ">STARS</div>
            <div className="mercury"></div>
            <div className="venus"></div>
            <div className="earth">
              <div className="moon"></div>
            </div>
            <div className="mars"></div>
            <div className="jupiter"></div>
            <div className="saturn"></div>
            <div className="uranus"></div>
            <div className="neptune"></div>
            <div className="pluto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
