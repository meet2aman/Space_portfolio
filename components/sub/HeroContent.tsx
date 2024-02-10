"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { weekday } from "../../constants/index";
import { month } from "../../constants/index";
import { useToast } from "components/ui/use-toast";

const HeroContent = () => {
  const { toast } = useToast();
  const date = new Date();
  const year = date.getFullYear();
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const d = date.getDate();
  const day = weekday[date.getDay()];
  const months = month[date.getMonth()];
  useEffect(() => {
    toast({
      variant: "space",
      title: "🎊 Welcome you Sir 🎊 ",
      description: `${day}, ${months} ${d}, ${year} at ${hours}:${minutes} ${ampm} | ⏰   Hope We can Serve You better !
      `,
    });
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center md:px-20 px-5 mt-40 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full justify-center m-auto flex flex-col gap-5 text-start">
        <motion.div
          className="Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]"
          variants={slideInFromTop}
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
          <h1 className="Welcome-text tracking-wide text-[13px]">
            FullStack Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 font-reospec font-black text-6xl md:text-8xl mt-6 text-white max-w-[600px] w-auto h-auto tracking-wide"
        >
          Providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            The Best
          </span>
          Project Experience
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] tracking-wide font-regular"
        >
          I&apos;m a Full Stack Software Engineer with Experience in Websites.
          Check out my Projects and Skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-end items-center"
      >
        <Image
          src={"/mainIconsdark-1.svg"}
          height={650}
          width={650}
          alt="work"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
