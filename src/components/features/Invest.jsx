import React from "react";
import Bitcoin from "../../images/Bitcoin.png";
import Graph from "../../images/graph.png";

const Increase = () => {
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
    <div className="grid grid-cols-2 gap-10 p-10">
      <div className="space-y-5 p-10">
        <h1 className="text-white text-4xl font-bold">Invest Smart</h1>
        <p className="text-white ">
          Get full statistic information about the behavior of buyers and
          sellers will help you to make the decision.
        </p>

        <div>
          <a className="bg-blue-600 p-3 rounded-full" href="/">
            Learn more
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="w-72 h-40 bg-[#35068C] rounded-lg p-5">
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
        <div className="absolute top-32 left-5">
          <div className="flex space-x-16">
            <Increase />
            <Price />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
