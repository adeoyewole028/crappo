import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Calculate from "./Calculate";

const Earn = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div className="relative text-white mb-10 pb-32">
      <h1
        className="text-4xl font-bold text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        Check how much you can earn
      </h1>
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <p>Let's check your hash rate to see how much you can earn today.</p>
        <p>you can earn as much as</p>
      </div>

      <div
        className="flex w-full justify-center absolute md:top-32 lg:top-32 lg:top-32 "
        data-aos="zoom-in"
      >
        <Calculate />
      </div>
    </div>
  );
};

export default Earn;
