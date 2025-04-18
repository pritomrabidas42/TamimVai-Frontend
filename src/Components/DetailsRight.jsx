import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/counter/counterSlice";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
const DetailsRight = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  data.size = ["L", "XL", "XS"];
  const [selectSize, setSelectSize] = useState(data.size[0]);
  const [selectColor, setSelectColor] = useState("");
  const dispatch = useDispatch();
  const HandleAddToCart = () => {
    data = {
      ...data,
      quantity: quantity,
      size: selectSize,
      color: selectColor,
      images: data.images[0],
      allPrice: data?.price * quantity,
    };
    dispatch(addToCart(data));
  };
  return (
    <div className="w-[60%]">
      <div className="xl:w-1/2 lg:w-1/2 md:w-3/4 sm:w-4/5 w-full justify-center mx-auto">
        <h2 className="font-Opensans text-primary font-medium text-2xl">
          {data?.title}
        </h2>
        <p className="font-nunitoFont font-normal text-xs text-[#9F9F9F] py-3">
          {data?.description}
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
            className={` ${
              selectSize == "L" ? "bg-[#B88E2F]" : "bg-[#F9F1E7]"
            } rounded-xl w-7 h-7 items-center justify-center flex cursor-pointer`}
            htmlFor="L"
          >
            L
            <input
              className="hidden"
              type="radio"
              id="L"
              name="sixe"
              value="L"
              onChange={(e) => setSelectSize(e.target.value)}
            />
          </label>
          <label
            className={`${
              selectSize == "XL" ? "bg-[#B88E2F]" : "bg-[#F9F1E7]"
            } rounded-xl w-7 h-7 items-center justify-center flex cursor-pointer`}
            htmlFor="XL"
          >
            XL
            <input
              className="hidden"
              type="radio"
              id="XL"
              name="sixe"
              value="XL"
              onChange={(e) => setSelectSize(e.target.value)}
            />
          </label>
          <label
            className={`${
              selectSize == "XS" ? "bg-[#B88E2F]" : "bg-[#F9F1E7]"
            } rounded-xl w-7 h-7 items-center justify-center flex cursor-pointer`}
            htmlFor="XS"
          >
            XS
            <input
              className="hidden"
              type="radio"
              id="XS"
              name="sixe"
              value="XS"
              onChange={(e) => setSelectSize(e.target.value)}
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
            className={`w-6 h-6 rounded-full cursor-pointer ${
              selectColor === "blue" && "scale-110"
            }`}
          >
            <input
              className="hidden"
              type="radio"
              id="blue"
              name="color"
              value="blue"
              onChange={(e) => setSelectColor(e.target.value)}
            />
          </label>
          <label
            htmlFor="black"
            style={{ background: "black" }}
            className={`w-6 h-6 rounded-full cursor-pointer ${
              selectColor === "black" && "scale-110"
            }`}
          >
            <input
              className="hidden"
              type="radio"
              id="black"
              name="color"
              value="black"
              onChange={(e) => setSelectColor(e.target.value)}
            />
          </label>
          <label
            htmlFor="orange"
            style={{ background: "orange" }}
            className={`w-6 h-6 rounded-full cursor-pointer ${
              selectColor === "orange" && "scale-110"
            }`}
          >
            <input
              className="hidden"
              type="radio"
              id="orange"
              name="color"
              value="orange"
              onChange={(e) => setSelectColor(e.target.value)}
            />
          </label>
        </div>
        <div className="flex gap-4 items-center pt-8">
          <div className="flex px-4 py-5 border rounded-xl gap-9  font-medium font-Popins text-base text-black">
            <button
              className="cursor-pointer"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              className="cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <div className="flex px-12 py-4 border border-black rounded-xl font-Raleway font-normal text-lg text-black">
            <button className="cursor-pointer" onClick={HandleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsRight;
