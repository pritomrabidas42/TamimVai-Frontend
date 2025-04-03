import React from 'react'

const Contact = () => {
  return (
    <section className="bg-pink-500 text-white text-center py-10">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="mt-2">
        Have questions? Want a custom cake? Reach out to us!
      </p>
      <a
        href="/contact"
        className="mt-4 inline-block bg-white text-pink-500 px-6 py-2 rounded-lg font-bold"
      >
        Contact Us
      </a>
    </section>
  );
}

export default Contact
