import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "animate.css";
import { Link } from "react-scroll";
import Profile from "../../Profile-modified.png";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pb-20 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-col">
        <div className="flex flex-col justify-center text-center h-full">
          <h2 className="text-4xl sm:text-7xl text-white  hover:cursor-pointer  font-Radi  ">
            <span className="animate-typing">
              Web Developer Bringing Ideas to Life.
            </span>
          </h2>

          {/* <div>
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
          </div> */}
        </div>
        <div className="z-10">
          <img
            src={Profile}
            alt="placeholder"
            className="rounded-full mx-auto w-72 h-72 "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
