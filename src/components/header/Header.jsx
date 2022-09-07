import React from "react";
import Illustration from "./Illustration";
import Nav from "./Navbar";
import Values from "./Values";

const Header = () => {
  return (
    <div className="pb-10 lg:pb-32 px-3 lg:px-10 pt-7">
      <Nav />
      <div className="text-white flex flex-col md:flex-row md:justify-between pt-10">
        <Values />
        <Illustration />
      </div>
    </div>
  );
};

export default Header;
