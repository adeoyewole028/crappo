import React, { useEffect } from "react";
import Illustration from "../../images/Illustration2.png";
import AOS from "aos";
import "aos/dist/aos.css";


const ContentIllustration = () => {
useEffect(() => {
  AOS.init({ duration: 2000 });
  AOS.refresh();
}, []);
  return (
    <div className="md:w-[600px] md:mr-32" data-aos="zoom-in">
      <img src={Illustration} alt="illustration" />
    </div>
  );
};

export default ContentIllustration;
