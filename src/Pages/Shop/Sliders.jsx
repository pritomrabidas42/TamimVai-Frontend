import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 bg-secandari text-white p-1 rounded-full cursor-pointer"
    style={{ top: "50%", transform: "translateY(-50%)" }}
  >
    <ChevronLeft size={15} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 bg-secandari text-white p-1 rounded-full cursor-pointer"
    style={{ top: "50%", transform: "translateY(-50%)" }}
  >
    <ChevronRight size={15} />
  </button>
);

const productData = [
  { title: "BIRTHDAY CAKE", img: "banner.jpg" },
  { title: "CUPCAKE", img: "banner.jpg" },
  { title: "CAKE", img: "banner.jpg" },
  { title: "CHOCOLATE CAKE", img: "banner.jpg" },
  { title: "FASHION", img: "banner.jpg" },
];

const Sliders = () => {
  const [selected, setSelected] = useState("CHOCOLATE CAKE");

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 lg:px-80 py-20">
        <h2 className="text-3xl font-bold font-Monrope text-center mb-6">
          Products
        </h2>
        <div className="text-center mb-10">
          <Link
            to="/"
            className="text-secandari text-sm font-medium font-Opensans"
          >
            Home
          </Link>
          <span className="text-gray-500 text-sm font-normal font-Opensans">
            {" "}
            / Products
          </span>
        </div>
        <Slider {...settings}>
          {productData.map((item, index) => (
            <div key={index} className="flex flex-col justify-center  items-center p-4">
              <div
                className={`rounded-full w-24 h-24 overflow-hidden border-2 transition-all duration-300 ${
                  selected === item.title
                    ? "border-red-400"
                    : "border-transparent"
                }`}
                onClick={() => setSelected(item.title)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-3 justify-center mx-auto text-xs font-semibold font-Monrope text-gray-700">
                {item.title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Sliders;
