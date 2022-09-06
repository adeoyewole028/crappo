import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Mining = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div
      className="bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] text-white pb-10 lg:pb-32 px-3 lg:px-10"
    
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 p-10 bg-[#3671E9] bg-img-mining bg-no-repeat bg-cover bg-center rounded-2xl" data-aos="zoom-in">
        <div>
          <h1 className="text-4xl font-bold">Start Mining</h1>
          <p>
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>
        <div className="self-center">
          <form className="md:flex md:space-x-5 lg:space-x-10 space-y-5">
            <input
              className="w-60 border-b-2 outline-0 bg-transparent"
              placeholder="Enter your email"
            />
            <button
              className="bg-white text-black p-2 px-3 rounded-full"
              data-aos="zoom-in-left"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mining;
