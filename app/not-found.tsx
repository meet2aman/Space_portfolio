"use client";
import { Button } from "components/ui/button";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Error = () => {
  return (
    <>
      <div className="text-white px-[50px] pt-20">
        <div className="my-20 items-center">
          <motion.div
            animate={{
              x: [-10, 10],
              y: [-10, 10],
              z: [-10, 10],
              scale: [1, 0.7, 0.7, 1.2, 1.2, 0.7, 0.7, 1],
              rotate: [0, 60, -60, 0, 0, 60, -60, 0],
              transition: {
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="flex justify-center items-center mb-5"
          >
            <Image
              src={"/astronaut.png"}
              alt="astronaut"
              height={500}
              width={500}
            />
          </motion.div>
          <div className=" text-center">
            <p className="text-2xl font-black mg:text-4xl lg:text-5xl font-mars text-white mb-5">
              You Have Lost in Space. <br />
              <motion.span
                initial={{ x: -1110, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 2,
                }}
                className="text-3xl mg:text-5xl font-black lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              >
                404
              </motion.span>
            </p>
            <Link href={"/"} className="z-50 text-center flex justify-center">
              <Button className="button-primary z-50 tracking-wide text-md">
                Release
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
