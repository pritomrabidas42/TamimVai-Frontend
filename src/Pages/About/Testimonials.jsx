import React from "react";

const Testimonials = () => {
  return (
    <section className="py-10 text-center">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl text-primary font-Opensans font-bold text-center py-5">
          What Our Customers Say
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Emma R.",
              review: "Absolutely delicious! Best cakes in town.",
            },
            { name: "James K.", review: "Great service and amazing flavors!" },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow hover:shadow-md duration-200"
            >
              <p className="mt-2 text-gray-700 text-sm font-normal font-Popins">
                “{testimonial.review}”
              </p>
              <h3 className="mt-2 text-gray-700 text-base font-normal font-Popins">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
