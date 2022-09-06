import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Bitcoin from "../../images/Bitcoin.png";
import Graph from "../../images/graph.png";

const Increase = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh();
      }, []);
  return (
    <div className="text-white text-xs space-y-2 bg-[#491F98] rounded-lg p-4">
      <h1 className="m-auto">
        Increase in <br></br> Trade
      </h1>
      <p>
        +75% <span>⬆</span>
      </p>
      <small className="text-slate-400">Sell option</small>
    </div>
  );
};

const Price = () => {
  return (
    <div className="h-14 text-white text-xs space-y-2 bg-[#491F98] rounded-lg p-3">
      <h1 className="m-auto">$15.32</h1>
      <small className="text-slate-400">Price in dollar</small>
    </div>
  );
};

const Invest = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-20 pb-32" data-aos="zoom-in">
      <div className="space-y-5 md:text-center lg:text-left md:px-24 lg:px-0">
        <h1 className="text-white text-4xl font-bold">Invest Smart</h1>
        <p className="text-white ">
          Get full statistic information about the behavior of buyers and
          sellers will help you to make the decision.
        </p>

        <div  data-aos="zoom-in">
          <a className="bg-blue-600 p-3 rounded-full text-white" href="/">
            Learn more
          </a>
        </div>
      </div>

      <div className="relative"  data-aos="zoom-in">
        <div className="lg:w-72 lg:h-40 bg-[#35068C] rounded-lg p-5">
          <div className="flex justify-between">
            <div className="flex space-x-3 text-xs">
              <div className="w-6">
                <img src={Bitcoin} alt="bitcoin" />
              </div>
              <div>
                <p className="text-white">
                  Bitcoin <span className="text-white">BTC</span>
                </p>
                <small className="text-white">00778 BTC</small>
              </div>
            </div>
            <small className="text-green-600 text-xs">+125%</small>
          </div>
          <div>
            <img src={Graph} alt="graph" />
          </div>
        </div>
        <div className="absolute md:top-60 lg:top-32 top-32 left-5" data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
          <div className="flex md:justify-around space-x-32 md:space-x-96 md:ml-20 lg:ml-0 lg:space-x-16">
            <Increase />
            <Price />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
