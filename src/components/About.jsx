import React from "react";

const About = () => {
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
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 my-8">
          My journey
        </p>

        <p className="text-xl mt-20">
          Hello there! 👋 I'm [Your Name], a passionate software developer with
          three years of hands-on experience in crafting innovative and
          efficient solutions. My journey in the world of coding has led me to
          excel in a diverse range of technologies, with a particular focus on
          Vue, Angular, Node.js, React, and React Native.
        </p>


        <br />

        <p className="text-xl"></p>
      </div>
    </div>
  );
};

export default About;
