import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "animate.css";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pb-20 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl wooden-text  hover:cursor-pointer hover:animate-pulse hover:text-white duration-300">
            I'm a Full Stack Developer
          </h2>
          <p className="text-white py-4 max-w-md">
            I have experience in HTML, CSS, JavaScript, React, Node.js, Express,
            MongoDB, and more.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowForward size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/300"
            alt="placeholder"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
