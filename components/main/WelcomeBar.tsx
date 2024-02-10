import React from "react";
import { MegaphoneIcon } from "@heroicons/react/24/solid";
const WelcomeBar = () => {
  return (
    <div className="grid gap-8 items-center justify-center mt-5 z-[30] max-md:scale-[0.9]">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
        <button className="relative bg-black leading-none rounded-lg px-7 py-4 flex items-center divide-x divide-gray-600">
          <span className="pr-6">
            <MegaphoneIcon className="text-pink-600 h-8 w-8 -rotate-6" />
          </span>

          <span className="pl-6 flex justify-center items-center gap-2 capitalize tracking-wider">
            <span className="text-gray-100">Welcome To my portfolio</span>
            <span className="text-indigo-500 capitalize tracking-wide group-hover:text-gray-100 transition duration-200">
              Sir &rarr;
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default WelcomeBar;
