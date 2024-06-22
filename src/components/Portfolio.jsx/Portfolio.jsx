import React from "react";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      title: "DSA",
      demo: "https://ayushkumar-21je0209s-organizatio.gitbook.io/untitled",
      code: "https://github.com/AyushKumar123456789/DSA",
    },
    {
      id: 2,
      title: "To-Do App",
      demo: "https://mydiary-0o7u.onrender.com/",
      code: "https://github.com/AyushKumar123456789/MyDiary",
    },
    {
      id: 3,
      title: "Machine Learning Project",
      code: "https://github.com/AyushKumar123456789/Sales_forcasting_using_TimeSeriesAnalysis",
    },
    {
      id: 4,
      title: "Code Helper",
      demo: "https://code-helper-1hrj.onrender.com/",
      code: "https://github.com/AyushKumar123456789/CodeHelper",
    },
    {
      id: 4,
      title: "C++ Web Server",
      code: "https://github.com/AyushKumar123456789/HTTP-Server-Using-CPP",
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-extrabold inline relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-blue-700 border-b-4 border-gray-500">
              Projects
            </span>
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 z-10">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="border-2 rounded-lg flex flex-col justify-between"
            >
              <div className="p-4 flex-col">
                <p className="text-xl font-bold mb-4">{portfolio.title}</p>
                <div className="flex justify-center space-x-4">
                  {portfolio.demo && (
                    <button
                      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300"
                      onClick={() => {
                        window.open(portfolio.demo);
                      }}
                    >
                      Demo
                    </button>
                  )}
                  {portfolio.code && (
                    <button
                      className="px-6 py-3 bg-gray-800 hover:bg-purple-600 text-white rounded-md transition duration-300"
                      onClick={() => {
                        window.open(portfolio.code);
                      }}
                    >
                      Code
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
