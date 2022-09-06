import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { prices } from "./priceData";

const price = prices.map((price) => {
  return (
    <div
      key={price.id}
      className="bg-[#35068C] rounded-lg p-4 md:p-8 lg:p-8 space-y-5 hover:bg-[#4610AD]hover:-translate-x-10 
      md:hover:bg-[#4610AD] md:hover:-translate-x-10 
      lg:hover:bg-[#4610AD] lg:hover:-translate-x-16 cursor-pointer"
    >
      <div className="flex space-x-14 md:justify-between lg:space-x-28">
        <div className="flex space-x-1 md:space-x-3 text-xs">
          <div className="w-4 md:w-6 self-center">
            <img src={price.image} alt="bitcoin" />
          </div>
          <div>
            <p className="text-white w-5">
              {price.symbol} <br></br>
              {price.name}
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-96 justify-between">
          <div>
            <small className="text-white">${price.amount}</small>
          </div>
          <div>
            <small
              className={price.change < 0 ? "text-red-300" : "text-green-300"}
            >
              {price.change > 0 ? `🔼 ${price.change}` : `🔽 ${price.change}`}
            </small>
          </div>
          <div>
            <small className="text-white">${price.volume}</small>
          </div>
        </div>
      </div>
    </div>
  );
});

const Prices = () => {
  return (
    <div className="bg-[#35068C] rounded-lg py-2">
      <div className="flex justify-between w-56 pr-2 md:w-[410px] md:pr-5 lg:w-80 ml-auto lg:pr-5">
        <small className="text-white">Price</small>
        <small className="text-white">Change</small>
        <small className="text-white">Volume(24h)</small>
      </div>
      {price}
    </div>
  );
};

const GrowProfit = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-20">
        <div
          className="space-y-5 md:text-center lg:text-left md:px-24 lg:px-0"
          data-aos="zoom-in"
        >
          <h1 className="text-white text-4xl font-bold">
            Grow your profit and track your investments
          </h1>
          <p className="text-white">
            Use advanced analytical tools. Clear TradingView charts let you
            track current and historical profit investments.
          </p>

          <div data-aos="zoom-in">
            <a className="bg-blue-600 p-3 rounded-full text-white" href="/">
              Learn more
            </a>
          </div>
        </div>
        <div className="mx-4 md:mx-14 lg:mx-0" data-aos="zoom-in">
          <Prices />
        </div>
      </div>
    </div>
  );
};

export default GrowProfit;
