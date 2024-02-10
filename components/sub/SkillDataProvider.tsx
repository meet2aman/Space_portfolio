"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  title: string;
}

const SkillDataProvider = ({ src, width, height, index, title }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="z-[30]"
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
          >
            <Image
              src={src}
              width={width}
              height={height}
              alt="skill image"
              className="cursor-pointer"
            />
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          <p className="font-mars text-md bg-transparent">{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SkillDataProvider;
