import bitcoin from "../../images/Bitcoin.png";
import ethereum from "../../images/Ethereum.png";
import litecoin from "../../images/Litecoin.png";

export const cardData = [
  {
    id: 1,
    title: "Bitcoin",
    currency: "BTC",
    description:
      "Bitcoin is a digital currency, which is a form of money that can be transferred electronically and can be used to pay for goods and services. It is the first decentralized digital currency, as there is no central authority that controls its creation and its issuing.",
    image: bitcoin,
    link: "/bitcoin",
  },
  {
    id: 2,
    title: "Ethereum",
    currency: "ETH",
    description:
      "Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference. ",
    image: ethereum,
    link: "/ethereum",
  },

  {
    id: 3,
    title: "Litecoin",
    currency: "LTC",
    description:
      "Litecoin is a peer-to-peer cryptocurrency that enables instant payments to anyone, anywhere in the world. It’s the first decentralized digital currency, as there is no central authority that controls its creation and its issuing.",
    image: litecoin,
    link: "/litecoin",
  },
];
