import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full text-center">
      <div>
        <h1 className="font-bold md:text-6xl sm:text-5xl text-4xl text-[#282828]">
          Welcome to TripHack.io
        </h1>
        <p>This is a hero text</p>
        <div>
          <a href="#">click</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
