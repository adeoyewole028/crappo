import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../images/Logo.png";

const navMenu = [
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Features",
    link: "/features",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const MobileNav = () => {
  const [trans, setTrans] = useState(
    "flex flex-col bg-slate-800 fixed w-full h-full text-3xl overflow-hidden right-0 bottom-0 top-0 z-30 transition-all ease-in-out duration-300"
  );

  const handleTrans = () => setTrans("w-0");

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <>
      <div className="flex justify-between items-center py-5">
        <div className="flex items-center">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="flex items-center text-white">
          <div className="flex items-center space-x-5">
            <div className="hidden lg:block">
              <div className="flex space-x-20">
                <ul className="flex space-x-10">
                  {navMenu.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-5">
                  <a href="/">Login</a>

                  <div className="text-zinc-500">|</div>

                  <a href="/" className="bg-blue-600 rounded-full py-1 px-3">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden z-40">
            {show ? (
              <FaTimes
                className="text-2xl text-white cursor-pointer"
                onClick={handleShow}
              />
            ) : (
              <FaBars
                className="text-2xl text-white cursor-pointer"
                onClick={handleShow}
              />
            )}
          </div>
        </div>
      </div>
      {show && (
        <div className={trans} style={{ width: show ? "100%" : "0" }}>
          <ul className="flex mt-40 flex-col items-center space-y-8 py-5">
            {navMenu.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="text-white text-lg">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-5 self-center text-white">
            <a href="/">Login</a>

            <div className="text-zinc-500">|</div>

            <a href="/" className="bg-blue-600 rounded-full px-3">
              Register
            </a>
          </div>
        </div>
      )}
    </>
  );
};

const Nav = () => {
  return (
    <div>
      <MobileNav />
    </div>
  );
};

export default Nav;
