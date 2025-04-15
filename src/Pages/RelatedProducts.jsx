import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
const RelatedProducts = ({ data }) => {
    const [heart, setHeart] = useState(false);
  return (
    <div className="bg-white mx-2 rounded-lg shadow hover:shadow-md transition">
      <Link to={`/shop/${data?.id}`}>
        <img
          src={data?.images[1]}
          alt={data?.name}
          className="w-full h-60 object-cover mb-4 rounded"
        />
      </Link>
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
            to={`/shop/${data?.id}`}
            className="text-secandari hover:border-b pt-1 duration-300 text-sm font-Monrope font-normal cursor-pointer"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
