import React from "react";
import Illustration from "./Illustration";
import Nav from "./Navbar";
import Values from "./Values";

const Header = () => {
  return (
    <div className="mb-40">
      <Nav />
      <div className="text-white flex justify-between p-5">
        <Values />
        <Illustration />
      </div>
    </div>
  );
};

export default Header;
