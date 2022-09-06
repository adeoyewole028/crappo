import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Illustrations from "../../images/Illustration.png";


const Illustration = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div className="w- md:w-96 md:mr-32" data-aos="zoom-in">
      <img src={Illustrations} alt="illustration" />
    </div>
  );
};

export default Illustration;
