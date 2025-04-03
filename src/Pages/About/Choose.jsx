import React from "react";

const Choose = () => {
  return (
    <section className="bg-white py-10 px-4 text-center">
      <h2 className="text-3xl font-bold">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
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
          <div key={index} className="bg-pink-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
