import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Values = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div className="md:w-96 md:mt-20">
      <div className="bg-slate-800 flex rounded-full justify-between mb-3 w-64 text-xs">
        <p
          className="bg-white text-slate-900 rounded-full p-1 m-1 font-semibold px-2 animate-pulse"
          data-aos="zoom-in"
        >
          75% SAVE
        </p>{" "}
        <p className="self-center mr-2">For the Black Friday weekend</p>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <h1 className="text-4xl font-bold mb-3 leading-10">
          Fastest & secure platform to invest in crypto
        </h1>
        <p className="text-xs mb-5 leading-relaxed">
          Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
          billion in transactions
        </p>
      </div>

      <a
        href="/"
        className="bg-blue-600 flex rounded-full justify-between p-1 px-2 mb-3 w-40"
        data-aos="zoom-in"
      >
        <p className="animate-pulse self-center">Try for FREE</p>
        <p
          className="bg-white rounded-full p-1 w-8 h-8 text-center text-black animate-pulse"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {">"}
        </p>
      </a>
    </div>
  );
};
export default Values;
