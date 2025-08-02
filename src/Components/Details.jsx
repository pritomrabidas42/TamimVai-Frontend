import React, { useEffect, useState } from "react";
import ProductSlide from "product-slide";

import { useParams } from "react-router-dom";
import { ProductData } from "../api/Index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RelatedProducts from "../Pages/RelatedProducts";

import DetailsRight from "./DetailsRight";
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
  
  return (
    <section>
      <div className="container mx-auto p-5">
        {product && (
          <div key={product.id} className="flex pt-20">
            <div className=" w-[40%]">
              <ProductSlide settings={settings} api={product.images} />
            </div>
            <DetailsRight data={product}/>
          </div>
        )}
      </div>
      <div className="container mx-auto px-6  py-20">
        <h2 className="text-3xl font-bold font-Monrope text-center mb-10">
          Related Product
        </h2>
        <Slider {...setting}>
          {relatedProduct.map((item) => (
            <RelatedProducts key={item.id} data={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Details;
