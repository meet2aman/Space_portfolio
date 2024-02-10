"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center z-20">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text tracking-wide text-[13px] lg:text-[18px]">
          Think better with Next.JS 13
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-reospec lg:text-6xl font-black  mt-[10px] text-center mb-[15px]"
      >
        Making apps with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          modern
        </span>{" "}
        technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] lg:text-3xl text-gray-200 mb-10 mt-[10px] text-center"
      >
      Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
