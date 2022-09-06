import React from "react";

const Calculate = () => {
  return (
    <div className="md:w-96 lg:w-[600px] m-10 md:m-0 flex">
      <div className="lg:w-full rounded-lg p-5 lg:p-10 bg-white text-black">
        <form className="lg:space-x-7 space-y-7 lg:space-y-0">
          <input
            type="text"
            className="w-full lg:w-40 border-b-2 outline-0"
            placeholder="Enter your hash rate"
          />

          <select className="w-full lg:w-32 border-b-2 outline-0">
            <option value="">TH/s</option>
            <option value="">H/s</option>
            <option value="">KH/s</option>
            <option value="">MH/s</option>
            <option value="">GH/s</option>
          </select>

          <button
            className="w-full lg:w-32 bg-blue-600 text-white rounded-full p-2"
            type="submit"
          >
            Calculate
          </button>
        </form>

        <div>
          <h1 className="text-xs mt-10 text-blue-500">
            ESTIMATED 24 HOURS REVENUE:
          </h1>
          <p className="font-bold mt-3">
            0.055 130 59 ETH <span className="text-blue-500">($1275.00)</span>{" "}
          </p>

          <p className="text-xs text-slate-400">
            Revenue will change based on mining difficulties and Ethereum price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
