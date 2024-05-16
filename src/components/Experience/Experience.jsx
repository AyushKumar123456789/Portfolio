import React, { useEffect, useState } from "react";
import sun from "../../assets/Experience/sun.png";
import "./Experience.css";

function Experience() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    createStars();
  }, []);

  function createStars() {
    const starsArray = [];
    for (let i = 0; i < 1000; i++) {
      const star = {
        id: i,
        top: Math.random() * 100 + "%",
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
        <div className="sky">
          <div className="container">
            <div className="sun">
              <img src={sun} alt="sun"></img>
            </div>
            {stars.map((star) => (
              <div
                key={star.id}
                className="star"
                style={{
                  top: star.top,
                  left: star.left,
                  width: ".1px",
                  height: ".1px",
                }}
              ></div>
            ))}
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
