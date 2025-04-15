import React, { useEffect, useState } from "react";
import ProductSlide from "product-slide";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { ProductData } from "../api/Index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RelatedProducts from "../Pages/RelatedProducts";
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
const Details = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);
  
  useEffect(() => {
    ProductData()
      .then((res) => {
        for (let item of res.data) {
          if (item.id == params.id) {
            setProduct(item);
            for (let related of res.data) {
              if (item.category.name == related.category.name)
                setRelatedProduct((prev) => [...prev, related]);
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);
const setting = {
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
  const settings = {
    direction: "vertical", // or "horizontal",
    zoom: true, // or false
  };
  console.log(product);

  return (
    <section>
      <div className="container mx-auto py-5">
        {product && (
          <div key={product.id} className="flex pt-20">
            <div className=" w-[40%]">
              <ProductSlide settings={settings} api={product.images} />
            </div>
            <div className="w-[60%]">
              <div className="xl:w-1/2 lg:w-1/2 md:w-3/4 sm:w-4/5 w-full justify-center mx-auto">
                <h2 className="font-Opensans text-primary font-medium text-2xl">
                  {product?.title}
                </h2>
                <p className="font-nunitoFont font-normal text-xs text-[#9F9F9F] py-3">
                  {product?.description}
                </p>
                <div className="flex gap-1">
                  <ul className="flex gap-1.5 text-base text-[#FFC700]">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStarHalf />
                    </li>
                  </ul>
                  <p className="font-Popins font-normal text-sm text-[#9F9F9F] border-l-2 border-[#9F9F9F] pl-5">
                    5 Customer Review
                  </p>
                </div>
                <p className="font-nunitoFont font-normal text-sm text-[#9F9F9F] w-3/4 pb-5"></p>
                <h4 className="font-normal font-Opensans text-sm text-primary pb-2">
                  Size
                </h4>
                <div className="flex gap-4 font-normal font-Popins text-primary text-sm ">
                  <label
                    className="bg-secandari rounded-xl w-7 h-7 items-center justify-center flex cursor-pointer"
                    htmlFor="L"
                  >
                    L
                    <input
                      className="hidden"
                      type="radio"
                      id="L"
                      name="sixe"
                      value="L"
                    />
                  </label>
                  <label
                    className="bg-secandari rounded-xl w-7 h-7 items-center justify-center flex cursor-pointer"
                    htmlFor="XL"
                  >
                    XL
                    <input
                      className="hidden"
                      type="radio"
                      id="XL"
                      name="sixe"
                      value="XL"
                    />
                  </label>
                  <label
                    className="bg-secandari rounded-xl w-7 h-7 items-center justify-center flex cursor-pointer"
                    htmlFor="XS"
                  >
                    XS
                    <input
                      className="hidden"
                      type="radio"
                      id="XS"
                      name="sixe"
                      value="XS"
                    />
                  </label>
                </div>
                <h4 className="font-normal font-Opensans text-sm text-[#9F9F9F] pb-2 pt-4">
                  Color
                </h4>
                <div className="flex gap-4 font-normal font-Popins text-[#000000] text-base pt-5">
                  <label
                    htmlFor="blue"
                    style={{ background: "blue" }}
                    className="w-6 h-6 rounded-full cursor-pointer"
                  >
                    <input
                      className="hidden"
                      type="radio"
                      id="blue"
                      name="color"
                      value="blue"
                    />
                  </label>
                  <label
                    htmlFor="black"
                    style={{ background: "black" }}
                    className="w-6 h-6 rounded-full cursor-pointer"
                  >
                    <input
                      className="hidden"
                      type="radio"
                      id="black"
                      name="color"
                      value="black"
                    />
                  </label>
                  <label
                    htmlFor="orange"
                    style={{ background: "orange" }}
                    className="w-6 h-6 rounded-full cursor-pointer"
                  >
                    <input
                      className="hidden"
                      type="radio"
                      id="orange"
                      name="color"
                      value="orange"
                    />
                  </label>
                </div>
                <div className="flex gap-4 items-center pt-8">
                  <div className="flex px-4 py-5 border rounded-xl gap-9  font-medium font-Popins text-base text-black">
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                  </div>
                  <div className="flex px-12 py-4 border border-black rounded-xl font-Raleway font-normal text-lg text-black">
                    <Link>Add To Cart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="container mx-auto px-6  py-20">
        <h2 className="text-3xl font-bold font-Monrope text-center mb-10">
          Related Product
        </h2>
        <Slider {...setting}>
          {relatedProduct.map((item) => (
            <RelatedProducts key={item.id} data={item}/>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Details;
