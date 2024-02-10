"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import animationData from "../../public/insta.json";
import fbLottie from "../../public/facebook.json";
import xLottie from "../../public/x.json";
import { delay, motion, useScroll, useTransform } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";

type props = {
  image: string;
  name: string;
  desc: string;
};

const AboutContent = ({ image, name, desc }: props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.10 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div className="relative">
      <div className="md:hidden mb-4 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 text-3xl font-black font-kusanagi to-cyan-500">
          {name}
        </span>
      </div>
      <div className="hidden absolute lg:top-4 lg:-left-10 md:-top-4 md:-left-14 md:flex justify-start lg:gap-[13.5rem] md:gap-[4rem] items-center w-full">
        <motion.div>
          <Image
            src={"/wind.svg"}
            alt={"star"}
            width={150}
            height={150}
            className="md:scale-50 lg:scale-100"
          />
        </motion.div>
        <div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl lg:text-[8rem] md:text-[3.5rem] font-black font-reospec ">
            {name}
          </span>
        </div>
      </div>
      <div className="md:flex justify-between gap-10 items-center">
        <motion.div
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          viewport={{
            once: true,
          }}
          className="md:w-1/3"
        >
          <Image src={image} width={800} height={800} alt={"profile-picture"} />
        </motion.div>
        <motion.div variants={slideInFromRight(0.6)} className="md:w-1/2 p-5">
          <p className="text-gray-400 text-lg tracking-wide line-clamp-5 md:line-clamp-0 md:pt-6">
            {desc}
          </p>
        </motion.div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: -15, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="flex justify-center items-center gap-4 lg:ml-[16.7rem]"
        >
          <Button
            lottie={animationData}
            url="https://www.facebook.com/profile.php?id=100008408310230"
            iconName="facebook"
            width={35}
            height={35}
            className="bg-rose-500 py-1 px-6 rounded-3xl cursor-pointer transition-all hover:bg-rose-400"
          />
          <Button
            lottie={fbLottie}
            url="https://www.facebook.com/profile.php?id=100008408310230"
            iconName="facebook"
            width={35}
            height={35}
            className="bg-sky-500 py-1 px-6 rounded-3xl cursor-pointer transition-all hover:bg-sky-400"
          />
          <Button
            lottie={xLottie}
            url="https://twitter.com/Amankushwaha200"
            iconName="facebook"
            width={35}
            height={35}
            className="bg-white py-1 px-6 rounded-3xl cursor-pointer hover:bg-white/80 transition-all"
          />
        </motion.div>
        <div className="h-4 w-[8rem] bg-gradient-to-r from-purple-500 to-cyan-500 hidden md:block" />
      </div>
    </div>
  );
};

export default AboutContent;
