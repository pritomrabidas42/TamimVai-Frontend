import React from "react";

const NewArrivals = () => {
  return (
    <section className="py-10 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-Opensans text-primary mt-6 pb-10">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {["Cake 1", "Cake 2", "Cake 3", "Cake 4"].map((cake, index) => (
            <div key={index} className="bg-white rounded-lg shadow pb-3">
              <img
                src="home-1.jpg"
                alt={cake}
                className="w-full h-52 object-cover rounded-md"
              />
              <h3 className="mt-2 text-primary font-bold font-Nunito-font">
                {cake}
              </h3>
              <p className="text-gray-600 text-sm font-normal font-Popins">
                Delicious and fresh
              </p>
              <button className="mt-4 inline-block bg-secandari text-black text-base font-medium font-Monrope px-8 py-2.5 scale-95 rounded-lg cursor-pointer">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
