import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
// import { addToCart } from "../../features/counter/counterSlice";
// import { useDispatch } from "react-redux";

const Items = ({ data }) => {
  return (
    <Link className="pt-5 pb-10 cursor-pointer" to={`/shop/${data?.id}`}>
      <div className="bg-white  rounded-lg shadow hover:shadow-md transition">
        <img
          src={data?.images[0]}
          alt={data?.name}
          className="w-full h-80 object-cover mb-4 rounded"
        />
        <div className="p-4 flex justify-between items-center">
          <div>
            <h3 className="text-base font-semibold text-primary font-Nunito-font">
              {data?.title.substring(0, 15)}...
            </h3>
            <p className="text-secandari font-Monrope text-lg font-bold">
              $ {data?.price}
            </p>
            <p className="text-gray-600 text-sm font-normal font-Popins">
              {data?.title.substring(0, 20)}...
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Items;
