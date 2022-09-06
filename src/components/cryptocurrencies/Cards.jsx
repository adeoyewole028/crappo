import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { cardData } from "./card-data";
import Arrow from "../../images/arrow.png";
import ArrowRight from "../../images/ArrowRight.png"

const Cards = () => {
  const [active, setActive] = useState(1);

  const handleActive = (id) => {
    setActive(id);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  const card = cardData.map((coins) => {
    return (
      <div
        key={coins.id}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div
          onClick={() => handleActive(coins.id)}
          className={
            active === coins.id
              ? "bg-[#2B076E] text-white lg:h-[470px] rounded-lg p-8 lg:w-80 space-y-5 cursor-pointer"
              : "lg:h-[470px] bg-white rounded-lg p-8 lg:w-80 space-y-5 cursor-pointer"
          }
        >
          <img
            className="w-16 m-auto animate-pulse"
            src={coins.image}
            alt={coins.title}
          />
          <h1>
            {coins.title} <span>{coins.currency}</span>
          </h1>
          <p>{coins.description}</p>
          <div className="flex justify-center">
            {active === coins.id ? (
              <a
                className="flex space-x-5 bg-blue-600 p-3 rounded-full text-white animate-pulse"
                href={coins.link}
              >
                <div className="self-center">Start mining</div>
                <div>
                  <img src={Arrow} alt="arrow" />
                </div>
              </a>
            ) : (
                <div>
                  <img src={ArrowRight} alt="arrow" />
                </div>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-slate-100 pt-40">
      <h1
        className="md:mt-20 lg:mt-5 text-center md:text-4xl font-bold lg:w-[800px] m-auto mb-10"
        data-aos="zoom-in"
      >
        Trade securely and market the high growth cryptocurrencies.
      </h1>

      <div>
        <div className="grid lg:grid-cols-3 text-center gap-5">{card}</div>
      </div>
    </div>
  );
};

export default Cards;
