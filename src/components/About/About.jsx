import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          omnis velit, excepturi quasi eligendi dolore maiores consequatur,
          magni deleniti necessitatibus quis. Voluptatibus temporibus
          reprehenderit sequi vel non a repudiandae quisquam cupiditate facilis,
          labore ad quis nulla, eum distinctio repellat explicabo corrupti earum
          recusandae iusto excepturi. Sit dolorum accusantium alias porro.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          consequatur corrupti illum excepturi facilis minus nostrum quos velit
          voluptatum numquam quis accusantium, odio harum quas maiores laborum
          quisquam vero voluptatem soluta debitis quo. Unde totam, sequi
          veritatis consequatur hic error exercitationem eaque quae voluptate
          doloremque sunt iusto qui alias ut.
        </p>
      </div>
    </div>
  );
}

export default About;
