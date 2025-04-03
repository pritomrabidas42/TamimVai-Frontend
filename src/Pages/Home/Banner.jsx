import React from "react";
import { Link } from "react-router-dom";

const Banner = ({para,heading}) => {
  return (
    <section className="bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center text-white text-center px-4 w-full relative">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.41)] bg-opacity-50"></div>
      <div className="p-6 rounded-lg relative z-10">
        <h1 className="text-5xl font-bold text-white font-Nunito-font">{ heading}</h1>
        <p className="mt-2 text-white text-sm font-normal font-Popins">{ para}</p>
        <Link
          to="/shop"
          className="mt-4 inline-block bg-secandari text-white text-base font-medium font-Monrope px-8 py-2.5 scale-95 rounded-lg"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Banner;
