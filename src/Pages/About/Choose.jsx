import React from "react";

const Choose = () => {
  return (
    <section className="bg-white py-10 px-4 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl text-primary font-Opensans font-bold text-center py-5">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-6 justify-center">
          {[
            {
              title: "Fresh Ingredients",
              desc: "We use only the highest quality ingredients for our cakes.",
            },
            {
              title: "Custom Cakes",
              desc: "Order personalized cakes for any occasion.",
            },
            {
              title: "Fast Delivery",
              desc: "Get your favorite cakes delivered to your doorstep.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow hover:shadow-md duration-200"
            >
              <h3 className="text-2xl font-bold text-primary font-Nunito-font">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-700 text-sm font-normal font-Popins">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
