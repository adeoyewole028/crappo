import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GrowProfit from "./GrowProfit";
import Invest from "./Invest";
import Statistics from "./Statistics";

const Features = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh();
      }, []);
  return (
    <div className="bg-[#2B076E] px-3 lg:px-10 pb-10 lg:pb-32">
      <h1 className="text-white text-center text-3xl p-5 pb-16" data-aos="zoom-in">
        Market sentiments, portfolio, and run <br></br> the infrastructure of
        your choice
      </h1>

      <Invest />
      <Statistics />
      <GrowProfit />
    </div>
  );
};

export default Features;
