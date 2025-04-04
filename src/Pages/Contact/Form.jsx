import React from "react";

const Form = () => {
  return (
    <section className="bg-white p-8 max-w-4xl mx-auto rounded-lg shadow-sm my-10">
      <h2 className="text-3xl text-primary font-Opensans font-bold text-center">
        Send Us a Message
      </h2>
      <form className="mt-6 grid grid-cols-1 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded-md w-full outline-none  border-gray-300 text-sm text-primary font-Popins"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded-md w-full outline-none  border-gray-300 text-sm text-primary font-Popins"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="border p-3 rounded-md w-full outline-none  border-gray-300 text-sm text-primary font-Popins"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-secandari text-white text-base font-Monrope  px-7 py-2.5 rounded-lg w-fit font-bold scale-95 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Form;
