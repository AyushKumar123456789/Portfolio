import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-extrabold inline relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-gray-500 to-blue-700 border-b-4 border-gray-500">
              About Me
            </span>
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm Ayush, a Computer Science Student at{" "}
          <a href="https://www.iitism.ac.in/" className="text-blue-500">
            Indian Institute of Technology , Dhanbad
          </a>{" "}
          , My field of Intrest lies in Problem Solving, Web Development and
          Machine Learning. However, programming is not my only field of
          interest, I also like to read, click pictures, watch
          documentaries/Movies and run in my spare time. ,
        </p>
        <br />
        <p className="text-xl">
          <p className="font-signature font-bold text-2xl pb-2">
            My Believe :{" "}
          </p>
          “Life's long battles don't always go to the stronger or faster man.
          But sooner or later, the man who wins is the man who thinks he can.” -
          Vince Lombardi
        </p>
        <div className="my-4 w-fit px-4 py-2 rounded-lg bg-gray-950 z-10 border-2 hover:bg-gray-800">
          <button
            onClick={() => {
              window.open("mailto:ayushjitendra28@gmail.com");
            }}
          >
            @ &nbsp; Email Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
