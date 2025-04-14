import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductData } from "../../api/Index";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-[50%] z-10 bg-secandari text-white p-1 rounded-full cursor-pointer"
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

const Sliders = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    ProductData()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  productList.length = 25;
  console.log(productList);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
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
          {productList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center  items-center p-4"
            >
              <Link
                className={`rounded-full w-24 h-24 overflow-hidden  transition-all duration-300 `}
              >
                <img
                  src={item?.images[2]}
                  alt={item.name}
                  className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Sliders;
