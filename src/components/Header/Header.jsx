import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import { theme_context } from "../../Context/Conetext";

function Header() {
  const [nav, setNav] = useState(false);
  const { current_theme, darkMode, lightMode } = theme_context();
  console.log(current_theme);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "Hobbies",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <>
      <div className="w-full h-1 top-border sticky top-0 z-20  "></div>

      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#212121] border-b  sticky top-1 z-20 ">
        <div className="shadow-2xl ">
          <h1 className="text-5xl font-signature ml-2 cursor-pointer">
            A<a className=" text-2xl">yush</a>
          </h1>
        </div>

        <ul className="hidden md:flex mx-auto space-x-5 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-400   hover:text-blue-500 hover:font-bold hover:underline hover:transition-all hover:duration-200 hover:ease-in-out "
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        {current_theme == "dark" ? (
          <div
            className="text-4xl mr-6 cursor-pointer"
            onClick={() => {
              lightMode();
            }}
          >
            ☀️
          </div>
        ) : (
          <div
            className="text-4xl mr-6 cursor-pointer"
            onClick={() => {
              darkMode();
            }}
          >
            🌙
          </div>
        )}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-30 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-20">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white hover:underline hover:transition-all hover:duration-200 hover:ease-in-out"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Header;
