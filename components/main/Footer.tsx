import React from "react";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="w-full h-full bg-transparent font-nunito tracking-wide text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-50">
            <div className="font-bold text-[16px] tracking-wide">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50 hover:scale-110 transition-all">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50 hover:scale-110 transition-all">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50 hover:scale-110 transition-all">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50 hover:scale-110 transition-all">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50 hover:scale-110 transition-all">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50 hover:scale-110 transition-all">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50 hover:scale-110 transition-all">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50 hover:scale-110 transition-all">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px] cursor-pointer z-50 hover:scale-110 transition-all">
                meet2amankushwaha@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="text-[15px] text-center w-full z-[20] shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md">
          <hr className="" />
          <div className="flex flex-wrap gap-4 justify-around items-center p-4 lg:p-5">
            <div className="flex justify-center gap-3 items-center relative">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <p>Deployed On</p>
              <Image src={"/vercel.svg"} alt="vercel" height={70} width={70} />
            </div>
            <p className="text-[15px] text-center">
              &copy;{" "}
              <Link
                href={"https://github.com/meet2aman"}
                className="cursor-pointer text-purple-500 underline hover:text-purple-600"
                target="_blank"
              >
                Aman Kushwaha
              </Link>{" "}
              {year} Inc. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
