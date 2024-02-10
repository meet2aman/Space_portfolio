"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  id: number;
}

const ProjectCard = ({ id, src, title, description }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      className="relative rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer z-20"
    >
      <Link href={`/${title}`}>
        <div className="absolute -top-10 left-2 font-black italic text-[5rem] text-white">
          <h1>{id}</h1>
        </div>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1 className="text-2xl text-white font-reospec font-bold">
            {title}
          </h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
