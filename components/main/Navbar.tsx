import { Socials } from "../../constants/index";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#hero" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-spin-slow"
          />
          <span className="font-black text-xl font-mars ml-[10px] hidden md:block text-gray-300 mt-2">
            WebDev
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 max-md:hidden">
          <div className="flex items-center justify-between  font-mars tracking-wide w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer transition-all hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer transition-all hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer transition-all hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Link href={social.href} key={social.name} target="_blank">
              <Image
                className="cursor-pointer"
                src={social.src}
                alt={social.name}
                key={social.name}
                width={social.width}
                height={social.height}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
