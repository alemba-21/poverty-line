import React from "react";

const OurPartners = () => {
  return (
    <div className="h-screen bg-black grid grid-cols-2 items-center">
      <div className="h-[500px]">
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_njobaah2.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div>
        <h1 className="text-8xl text-white font-semibold">
          We <b className="text-orange-500"> Work</b> Together With Our{" "}
          <b className="text-green-700">Partners</b>{" "}
        </h1>
      </div>
    </div>
  );
};

export default OurPartners;
