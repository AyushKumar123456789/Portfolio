import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
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
          <h2 className="text-4xl sm:text-7xl text-white hover:cursor-pointer font-extrabold leading-tight">
            <a href="https://git.io/typing-svg">
              <img
                src="https://readme-typing-svg.demolab.com?font=Special+Elite&size=50&lines=Debugging+My+Destiny;%22I+write+code+to+fix+bugs+and+sometimes+my+life.%22&center=true&vCenter=true&multiline=true&width=1300&height=150&duration=2000&pause=500&random=false"
                alt="Typing SVG"
              />
            </a>
          </h2>
        </div>
        <div className="z-10">
          <img
            src={Profile}
            alt="placeholder"
            className="rounded-full mx-auto w-72 h-72 "
          />
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-10">
        <a
          href="https://codeforces.com/profile/MartinKclark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiCodeforces size={40} className="text-white hover:text-gray-500" />
        </a>
        <a
          href="https://www.codechef.com/users/martin_k_clark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiCodechef size={40} className="text-white hover:text-gray-500" />
        </a>
        <a
          href="https://leetcode.com/u/ayushjitendra28/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode size={40} className="text-white hover:text-gray-500" />
        </a>
      </div>
    </div>
  );
}

export default Home;
