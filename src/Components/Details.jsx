import React from "react";
import ProductSlide from "product-slide";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";
const Details = () => {
  const API = {
    images: [
      "https://i.imgur.com/QkIa5tT.jpeg",
      "https://i.imgur.com/jb5Yu0h.jpeg",
      "https://i.imgur.com/UlxxXyG.jpeg",
      "https://i.imgur.com/UlxxXyG.jpeg",
    ],
  };
  const settings = {
    direction: "vertical", // or "horizontal",
    zoom: true, // or false
  };
  return (
    <section>
      <div className="container mx-auto py-5">
        <div className="flex">
          <div className="pt-20 w-[40%]">
            <ProductSlide settings={settings} api={API.images} />
          </div>
          <div className="w-[60%]">
            <div className="xl:w-1/2 lg:w-1/2 md:w-3/4 sm:w-4/5 w-full justify-center mx-auto">
              <h2 className="font-Opensans font-medium text-5xl"></h2>
              <h3 className="font-nunitoFont font-medium text-3xl text-[#9F9F9F] py-3"></h3>
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
              <p className="font-nunitoFont font-normal text-sm text-[#9F9F9F] w-3/4 pt-4 pb-5"></p>
              <h4 className="font-normal font-Opensans text-sm text-[#9F9F9F] pb-2">
                Size
              </h4>
              <div className="flex gap-4 font-normal font-Popins text-[#000000] text-base">
                <label htmlFor="L">
                  L
                  <input
                    className="hidden"
                    type="radio"
                    id="L"
                    name="sixe"
                    value="L"
                  />
                </label>
                <label htmlFor="XL">
                  XL
                  <input
                    className="hidden"
                    type="radio"
                    id="XL"
                    name="sixe"
                    value="XL"
                  />
                </label>
                <label htmlFor="XS">
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
                <label htmlFor="blue" style={{ background: "blue" }}>
                  <input
                    className="hidden"
                    type="radio"
                    id="blue"
                    name="color"
                    value="blue"
                  />
                </label>
                <label htmlFor="black" style={{ background: "black" }}>
                  <input
                    className="hidden"
                    type="radio"
                    id="black"
                    name="color"
                    value="black"
                  />
                </label>
                <label htmlFor="orange" style={{ background: "orange" }}>
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
                  <p></p>
                  <button>+</button>
                </div>
                <div className="flex px-12 py-4 border border-black rounded-xl font-Raleway font-normal text-lg text-black">
                  <Link>Add To Cart</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
