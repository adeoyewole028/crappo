import React from "react";
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

const Nav = () => {
  return (
    <div>
      <nav className="text-white flex p-5">
        <div className="logo w-32">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="flex ml-auto self-center space-x-20">
          <div className="navbar-menu flex space-x-10">
            {navMenu.map((item, index) => {
              return (
                <div className="" key={index}>
                  <a href={item.link}>{item.name}</a>
                </div>
              );
            })}
          </div>

          <div className="flex space-x-5">
            <a href="">Login</a>

            <div className="text-zinc-500">|</div>

            <a href="" className="bg-blue-600 rounded-full px-3">
              Register
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
