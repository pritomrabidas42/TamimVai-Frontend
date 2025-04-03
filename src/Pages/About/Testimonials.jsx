import React from "react";

const Testimonials = () => {
  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-bold">What Our Customers Say</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            name: "Emma R.",
            review: "Absolutely delicious! Best cakes in town.",
          },
          { name: "James K.", review: "Great service and amazing flavors!" },
        ].map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">“{testimonial.review}”</p>
            <h3 className="mt-2 font-bold">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
