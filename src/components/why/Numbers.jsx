import React from "react";
import Chart from "../..//images/chart.png";
import User from "../../images/user.png";
import Earth from "../../images/earth.png";

const Numbers = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-between text-white md:mb-16 space-y-10 md:space-y-0">
      <div className="w-64 flex space-x-5 self-center">
        <div className="w-12">
          <img src={Chart} alt="chart"/>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold">$30B</h1>
          <p className="text-xs text-slate-600">Digital Currency Exchanged</p>
        </div>
      </div>

      <div className="w-64 flex space-x-5 self-center">
        <div className="w-12">
          <img src={User} alt="user" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">10M+</h1>
          <p className="text-xs text-slate-600">Trusted Wallets Investor</p>
        </div>
      </div>

      <div className="w-64 flex space-x-5 self-center">
        <div className="w-12">
          <img src={Earth} alt="earth" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold">195</h1>
          <p className="text-xs text-slate-600">Countries Supported</p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
