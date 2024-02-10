"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lottie from "react-lottie";
import animationData from "../../public/insta.json";
import { motion } from "framer-motion";
import { fadeInAnimation } from "utils/motion";

type props = {
  url: string;
  className?: string;
  width: number;
  height: number;
  iconName: string;
  lottie: any;
};

const Button = ({ url, className, width, height, iconName, lottie }: props) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const lottieRef = React.useRef<any>(null);

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.play(); // Play the animation when mouse enters
    }
  };

  const handleMouseLeave = () => {
    if (lottieRef.current) {
      lottieRef.current.stop(); // Stop the animation when mouse leaves
    }
  };

  const defaultOptions = {
    autoplay: isHovered,
    loop: false,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <motion.div
      variants={fadeInAnimation}
      className={`${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Link href={url} target="_blank">
        <Lottie
          ref={lottieRef}
          options={defaultOptions}
          height={height}
          width={width}
        />
      </Link>
    </motion.div>
  );
};

export default Button;
