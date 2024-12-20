import React from "react";

const Hero = () => {
  return (
    <>
      <style>
        {`
          .feathered-image {
            mask-image: linear-gradient(to right, transparent 0%, black 50%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 50%);
            mask-composite: exclude;
            -webkit-mask-composite: destination-in;
          }
        `}
      </style>
      <section className="flex py-20 w-full text-[#545454]">
        <div className="hero-section mx-auto w-full max-w-[75rem]">
          <div className="hero-content flex justify-center items-center">
            <div className="w-full flex px-6 justify-between items-center max-w-[75rem] h-[37rem] relative">
              <div className="rounded-[35px] h-full overflow-hidden ml-auto select-none drag-note">
                <img
                  className="relative left-28 -top-10 feathered-image"
                  src="traveler.jpg"
                  alt="Traveler"
                />
              </div>

              <div className="flex flex-col gap-7 justify-between hero-text absolute">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[16px] font-semibold uppercase">
                    +12,000 happy users
                  </h3>
                  <h1 className="text-7xl leading-tight font-semibold">
                    Your perfect
                    <br /> trip planned in <br />
                    minutes...
                  </h1>
                </div>
                <p className="text-xl">
                  From flights to activities, get a personalized
                  <br /> plan for your next adventure — effortlessly
                </p>
                <button className="text-left bg-black w-fit h-[50px] px-4 rounded-lg text-white bg-gradient-to-r from-[#75D3FF] to-[#15B0F8]">
                  Get started - it's free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
