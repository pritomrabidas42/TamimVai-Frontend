import React, { useEffect, useState } from "react";
import { ProductData } from "../../api/Index";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../features/counter/counterSlice";

const NewArrivals = () => {
  const [productList, setProductList] = useState([]);
  // const dispatch = useDispatch();
  useEffect(() => {
    ProductData()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  productList.length = 20;

  return (
    <section className="py-10 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-Opensans text-primary mt-6 pb-10">
          Our Product
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {productList.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow pb-3">
              <img
                src={item?.images[0]}
                alt={item?.title}
                className="w-full h-52 object-cover rounded-md"
              />
              <h3 className="mt-2 text-primary font-bold font-Nunito-font">
                $ <span className="text-sm text-gray-500">{item?.price}</span>
              </h3>
              <p className="text-gray-600 text-sm font-normal font-Popins">
                {item?.title.substring(0, 20)}...
              </p>
              <Link
                // onClick={() => dispatch(addToCart(item))}
                to={`/shop/${item?.id}`}
                className="mt-4 inline-block bg-secandari text-black text-base font-medium font-Monrope px-8 py-2.5 scale-95 rounded-lg cursor-pointer"
              >
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
