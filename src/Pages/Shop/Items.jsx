import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { addToCart } from "../../features/counter/counterSlice";
import { useDispatch } from "react-redux";

const Items = ({ data }) => {
  const [heart, setHeart] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="pt-5 pb-10">
      <div className="bg-white  rounded-lg shadow hover:shadow-md transition">
        <img
          src={data?.images[0]}
          alt={data?.name}
          className="w-full h-60 object-cover mb-4 rounded"
        />
        <div className="p-4 flex justify-between items-center">
          <div>
            <h3 className="text-base font-semibold text-primary font-Nunito-font">
              {data?.title.substring(0, 15)}...
            </h3>
            <p className="text-secandari font-Monrope text-lg font-bold">
              $ {data?.price}
            </p>
          </div>
          <div>
            {heart ? (
              <FaHeart
                className="text-secandari text-lg cursor-pointer"
                onClick={() => setHeart(false)}
              />
            ) : (
              <FaRegHeart
                className="text-primary text-lg cursor-pointer"
                onClick={() => setHeart(true)}
              />
            )}
            <Link
              onClick={() => dispatch(addToCart(data))}
              to={`/shop/${data?.id}`}
              className="text-secandari hover:border-b pt-1 duration-300 text-sm font-Monrope font-normal cursor-pointer"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
