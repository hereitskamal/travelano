import React from "react";
import SimpleGlobe from "./SimpleGlobe";
import { FaArrowDown } from "react-icons/fa";

const HomepageBanner = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-50">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-center flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 ">
            <h1 className="text-blue-500 text-4xl font-bold mb-4 md:mb-2">
              Welcome
            </h1>
            <p className="text-gray-700 text-lg mb-4">
              Discover breathtaking destinations and plan your next adventure with us.
            </p>
            <p className="text-green-700 mb-4 italic">
              "From the towering peaks of the Himalayas to the pristine beaches of the Caribbean, we offer a wide range of tours tailored to your preferences.""
            </p>
            <p className="text-gray-700 mb-6 text-right">
              -Kamal Sharma
            </p>
            <button className=" text-indigo-400 w-full flex items-center py-2 border border-gray-50 px-6 rounded-md hover:text-indigo-600 transition duration-300 hover:border-gray-600">
              Explore Tours <FaArrowDown/>
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <SimpleGlobe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
