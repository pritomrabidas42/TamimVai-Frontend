import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

const RelativeProduct = () => {
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-secandari p-1 bg-white rounded-full shadow-sm justify-center items-center flex"
    >
      <IoMdArrowDropleft size={25} />
    </button>
  );

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-secandari p-1 bg-white rounded-full shadow-sm justify-center items-center flex"
    >
      <IoMdArrowDropright size={25} />
    </button>
  );
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />, // ✅ Custom arrows
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // For tablets & small desktops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For mobile landscape
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For mobile portrait
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="w-full justify-center items-center flex">
          <Slider {...settings} className="w-[95%]">
            <div className="p-4">
              <div className="bg-white rounded-md shadow-md flex flex-col items-center  pb-3">
                <img
                  src="banner.jpg"
                  alt='Banner'
                  width={170}
                  height={170}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="text-lg text-primary font-semibold">
                  hello world
                </h4>
                <p className="text-base text-gray-600 font-medium">
                  this product is good
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RelativeProduct;
