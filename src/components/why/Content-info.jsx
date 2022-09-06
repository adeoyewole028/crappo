import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContentInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div className="md:w-[500px] text-white mt-20" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <h1 className="text-4xl font-bold mb-6 leading-relaxed">
        Why you should choose CRAPPO
      </h1>
      <p className="text-xs mb-10 leading-loose w-72">
        Experience the next generation cryptocurrency platform. No financial
        borders, extra fees and fake reviews.
      </p>
      <button className="bg-blue-600 rounded-full self-center p-3 px-5"  data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
        Learn More
      </button>
    </div>
  );
};

export default ContentInfo;
