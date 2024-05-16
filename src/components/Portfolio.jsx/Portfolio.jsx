import React from "react";

import node from "../../assets/Portfolio/node.png";
import react from "../../assets/Portfolio/react.png";
import php from "../../assets/Portfolio/php.jpg";
import python from "../../assets/Portfolio/python.png";
import js from "../../assets/Portfolio/Js.png";
import web from "../../assets/Portfolio/web.png";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: node,
    },
    {
      id: 2,
      src: react,
    },
    {
      id: 3,
      src: php,
    },
    {
      id: 4,
      src: python,
    },
    {
      id: 5,
      src: js,
    },
    {
      id: 6,
      src: web,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map((portfolio) => (
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={portfolio.src}
                alt=""
                className="portfolio-image rounded-md hover:scale-105 duration-300 w-screen h-30"
              />
              <div className="flex items-center justify-center border-t-2">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
