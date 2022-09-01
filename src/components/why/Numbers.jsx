import React from "react";
import Chart from "../..//images/chart.png";
import User from "../../images/user.png";
import Earth from "../../images/earth.png";

const Numbers = () => {
  return (
    <div className="flex justify-between text-white px-5 mb-32">
      <div className="flex space-x-5">
        <div className="w-12">
          <img src={Chart} />
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold">$30B</h1>
          <p className="text-xs text-slate-600">Digital Currency Exchanged</p>
        </div>
      </div>

      <div className="flex space-x-5">
        <div className="w-12">
          <img src={User} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">10M+</h1>
          <p className="text-xs text-slate-600">Trusted Wallets Investor</p>
        </div>
      </div>

      <div className="flex space-x-5">
        <div className="w-12">
          <img src={Earth} />
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
