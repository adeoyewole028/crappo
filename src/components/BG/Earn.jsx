import React from "react";
import Calculate from "./Calculate";

const Earn = () => {
  return (
    <div className="relative text-white mb-32 pb-32">
      <h1 className="text-4xl font-bold text-center">
        Check how much you can earn
      </h1>
      <div className="text-center">
        <p>Let's check your hash rate to see how much you can earn today.</p>
        <p>you can earn as much as</p>
      </div>

      <div className="absolute top-64 left-[400px] right-[400px]">
        <Calculate />
      </div>
    </div>
  );
};

export default Earn;
