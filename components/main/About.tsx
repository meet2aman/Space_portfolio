"use client";

import React from "react";
import { aboutMe } from "../../constants/index";
import { SparklesIcon } from "@heroicons/react/24/solid";
import AboutContent from "components/sub/AboutContent";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center md:p-20 p-5 z-20"
      id="about-me"
    >
      <div className="Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9] mb-10">
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
        <h1 className="Welcome-text tracking-wide text-[13px] md:text-[15px] capitalize">
          About the Developer
        </h1>
      </div>
      <div>
        <AboutContent
          image={aboutMe.image}
          desc={aboutMe.desc}
          name={aboutMe.name}
        />
      </div>
    </div>
  );
};

export default About;
