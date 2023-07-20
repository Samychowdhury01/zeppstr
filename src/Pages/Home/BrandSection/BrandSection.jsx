import React from "react";
import brand1 from "../../../assets/home/image-1.png";
import brand2 from "../../../assets/home/image-2.png";
import brand3 from "../../../assets/home/image-3.png";
import brand4 from "../../../assets/home/image-4.png";
import brand5 from "../../../assets/home/image-5.png";

const BrandSection = () => {
  return (
    <section className="my-16 px-8 md:px-28">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-6">Global Brands that have trusted us</h1>
      <div className="gradient-bg flex flex-col md:flex-row items-center justify-center gap-10 rounded-xl shadow-xl px-10 py-4">
        <img src={brand2} alt="brand-image" />
        <img src={brand4} alt="brand-image" />
        <img src={brand3} alt="brand-image" />
        <img src={brand5} alt="brand-image" />
        <img src={brand1} alt="brand-image" />
      </div>
    </section>
  );
};

export default BrandSection;
