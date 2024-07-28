import React from "react";
import TechStackData from "./TechStackData";

const TechStack = () => {
  return (
    <div>
      <div
        name="skills"
        className="dark:bg-gradient-to-b dark:from-black dark:to-gray-950 w-full h-full"
      >
        <div className="max-w-screen-lg mx-auto p-4 md:p-8 flex flex-col justify-center w-full h-full dark:text-white">
          <div className="text-center">
            <p className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</p>
            <p className="font-medium py-3 text-gray-900 dark:text-gray-300">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 sm:px-0">
            {TechStackData.map(({ id, name , icon }) => (
              <div
                key={id}
                className={`shadow-lg hover:scale-105 transition-transform duration-300 py-6 rounded-xl bg-gradient-to-r dark:shadow-md dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900`}
              >
                <div className="flex items-center justify-center">
                  <img src={icon}  className="w-16 h-16 mx-auto" />
                </div>
                <p className="mt-4 text-gray-900 dark:text-gray-200 font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
