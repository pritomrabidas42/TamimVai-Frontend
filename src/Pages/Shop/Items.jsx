import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Items = ({ currentItems }) => {
  const [heart , setHeart] = useState(false)
  return (
    <div className="grid grid-cols-4 gap-6 pt-5 pb-10">
      {currentItems &&
        currentItems.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover mb-4 rounded"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-base font-semibold text-primary font-Nunito-font">
                  {product.name}
                </h3>
                <p className="text-secandari font-Monrope text-lg font-bold">
                  {product.price}
                </p>
              </div>
              <div >
                {heart ? (
                  <FaHeart className="text-secandari text-lg cursor-pointer" onClick={() => setHeart(false)} />
                ) : (
                  <FaRegHeart className="text-primary text-lg cursor-pointer" onClick={() => setHeart(true)} />
                )}
                
                <Link className="text-secandari hover:border-b pt-1 duration-300 text-sm font-Monrope font-normal cursor-pointer">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Items
