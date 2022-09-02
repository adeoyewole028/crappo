import React from "react";
import { cardData } from "./card-data";

const card = cardData.map(
  ({ id, image, title, currency, description, link }) => {
    console.log(image, title, currency, description);
    return (
      <div className="">
        <div key={id} className="bg-white rounded-lg p-8 w-80 space-y-5">
          <img className="w-16 m-auto" src={image} alt={title} />
          <h1>
            {title} <span>{currency}</span>
          </h1>
          <p>{description}</p>
          <div>
            <a className="bg-blue-600 p-3 rounded-full" href={link}>
              Learn more
            </a>
          </div>
        </div>
      </div>
    );
  }
);

const Cards = () => {
  return (
    <div className="bg-slate-100 mb-32 pt-80">
      <h1 className="text-center text-4xl font-bold w-[800px] m-auto mb-10">
        Trade securely and market the high growth cryptocurrencies.
      </h1>

      <div>
        <div className="grid grid-cols-3 text-center gap-5">{card}</div>
      </div>
    </div>
  );
};

export default Cards;
