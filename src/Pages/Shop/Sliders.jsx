import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 bg-secandari text-white p-2 rounded-full cursor-pointer"
    style={{ top: "50%", transform: "translateY(-50%)" }}
  >
    <ChevronLeft size={24} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 bg-secandari text-white p-2 rounded-full cursor-pointer"
    style={{ top: "50%", transform: "translateY(-50%)" }}
  >
    <ChevronRight size={24} />
  </button>
);

const Sliders = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className=" mb-6 relative">
      <div className="container mx-auto px-4 py-10">
        <Slider {...settings}>
          {[...Array(8)].map((_, index) => (
            <div key={index} className="p-2">
              <img
                src={`/cake-${index + 1}.jpg`}
                alt={`Cake ${index + 1}`}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Sliders;
