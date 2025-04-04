import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="bg-secandari text-white text-center py-16 my-9">
      <h2 className="text-5xl font-bold text-white font-Nunito-font">
        Get in Touch
      </h2>
      <p className="mt-2 text-white text-sm font-normal font-Popins">
        Have questions? Want a custom cake? Reach out to us!
      </p>
      <Link
        to="/contact"
        className="mt-4 inline-block bg-white text-pink-500 px-6 py-2 rounded-lg text-base font-medium font-Monrope cursor-pointer"
      >
        Contact Us
      </Link>
    </section>
  );
}

export default Contact
