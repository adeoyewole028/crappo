import React from "react";
import Logo from "../../images/Logo.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="text-white px-3 lg:px-10">
      <div className="lg:grid lg:grid-cols-4 flex flex-col text-center lg:text-left">
        <div className="self-center">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="space-y-3 lg:space-y-5 self-center mt-5">
          <h1 className="text-2xl font-bold">Quick link</h1>
          <ul className="space-y-2 text-slate-400 text-xs">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3 lg:space-y-5 self-center mt-5">
          <h1 className="text-2xl font-bold">Resources</h1>
          <ul className="space-y-2 text-slate-400 text-xs">
            <li>
              <a href="/">Download Whitepaper</a>
            </li>
            <li>
              <a href="/">Smart Token</a>
            </li>
            <li>
              <a href="/">Blockchain Explorer</a>
            </li>
            <li>
              <a href="/">Crypto API</a>
            </li>
            <li>
              <a href="/">Interest</a>
            </li>
          </ul>
        </div>
        <div className="space-y-5 mt-5">
          <h1 className="text-2xl font-bold">
            We accept the following payment systems
          </h1>
          <div className="flex space-x-5 justify-center">
            <div>
              <a href="/">
                <img
                  src="https://img.icons8.com/color/48/000000/visa.png"
                  alt="mastercard"
                />
              </a>
            </div>
            <div>
              <a href="/">
                <img
                  src="https://img.icons8.com/color/48/000000/mastercard.png"
                  alt="bitcoin"
                />
              </a>
            </div>
            <div>
              <a href="/">
                <img
                  src="https://img.icons8.com/color/48/000000/bitcoin.png"
                  alt="visa"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-slate-400 text-xs mt-10">
        <div>
          <p>© {year} CRAPPO. All rights reserved.</p>
        </div>
        <div className="flex ">
          <a className="w-6" href="/">
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="facebook"
            />
          </a>
          <a className="w-6" href="/">
            <img
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
              alt="twitter"
            />
          </a>
          <a className="w-6" href="/">
            <img
              src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
              alt="instagram"
            />
          </a>
          <a className="w-6" href="/">
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a className="w-6" href="/">
            <img
              src="https://img.icons8.com/color/48/000000/youtube-play.png"
              alt="youtube"
            />
          </a>
        </div>
      </div>{" "}
      <p className="text-center text-slate-400 text-xs mt-10">
        Made with ❤️ by <a href="/">Adegboyega</a>
      </p>
    </div>
  );
};

export default Footer;
