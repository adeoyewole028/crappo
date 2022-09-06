import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DetailedStat from "../../images/Detailed-Statistics.png";

const Statistics = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div
      className="grid lg:grid-cols-2 lg:gap-20 gap-20 pb-16"
      data-aos="zoom-in"
    >
      <div className="space-y-3">
        <img src={DetailedStat} alt="Detailed Statistics" />
      </div>
      <div>
        <div className="space-y-5 md:text-center lg:text-left md:px-24 lg:px-0">
          <h1 className="text-white text-4xl font-bold">Detailed Statistics</h1>
          <p className="text-white ">
            View all mining related information in realtime, at any point at any
            location and decide which polls you want to mine in.
          </p>

          <div data-aos="zoom-in">
            <a className="bg-blue-600 p-3 rounded-full text-white" href="/">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
