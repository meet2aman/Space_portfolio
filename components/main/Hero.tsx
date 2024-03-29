import HeroContent from "components/sub/HeroContent";
import React from "react";
import WelcomeBar from "./WelcomeBar";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full " id="hero">
      <video
        autoPlay
        loop
        muted
        className="rotate-180 absolute top-[-34px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
      <WelcomeBar />
    </div>
  );
};

export default Hero;
