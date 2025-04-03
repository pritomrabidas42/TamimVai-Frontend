import React from "react";

const Form = () => {
  return (
    <section className="bg-white py-10 px-4 max-w-4xl mx-auto rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center">Send Us a Message</h2>
      <form className="mt-6 grid grid-cols-1 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded-md w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded-md w-full"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="border p-3 rounded-md w-full"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-2 rounded-lg w-full font-bold hover:bg-pink-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Form;
