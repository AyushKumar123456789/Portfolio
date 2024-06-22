import React from "react";

import dsa from "../../assets/Portfolio/dsa.jpg";
import ToDo from "../../assets/Portfolio/ToDo.png";
import ml from "../../assets/Portfolio/ml.png";
import Code from "../../assets/Portfolio/Code.jpg";
import js from "../../assets/Portfolio/Js.png";
import web from "../../assets/Portfolio/web.png";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: dsa,
      code: "https://github.com/AyushKumar123456789/DSA",
      demo: "https://ayushkumar-21je0209s-organizatio.gitbook.io/untitled",
    },
    {
      id: 2,
      src: ToDo,
      demo: "https://mydiary-0o7u.onrender.com/",
      code: "https://github.com/AyushKumar123456789/MyDiary",
    },
    {
      id: 3,
      src: ml,
      code: "https://github.com/AyushKumar123456789/Sales_forcasting_using_TimeSeriesAnalysis",
    },
    {
      id: 4,
      src: Code,
      demo: "https://code-helper-1hrj.onrender.com/",
      code: "https://github.com/AyushKumar123456789/CodeHelper",
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 z-10 ">
          {portfolios.map((portfolio) => (
            <div className="border-2  rounded-lg">
              <div className="object-cover">
                <img
                  src={portfolio.src}
                  alt=""
                  className="portfolio-image rounded-md hover:scale-105 duration-300 w-screen h-30"
                />
              </div>
              <div className="flex items-center justify-center ">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 "
                  onClick={() => {
                    window.open(portfolio.demo);
                  }}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 "
                  onClick={() => {
                    window.open(portfolio.code);
                  }}
                >
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
