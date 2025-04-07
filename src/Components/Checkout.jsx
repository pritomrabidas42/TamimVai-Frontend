import React from 'react'
import Froms from '../Pages/Checkout/Froms';
import OderReview from '../Pages/Checkout/OderReview';

const Checkout = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-10 xl:gap-12 2xl:gap-16">
          <Froms />
          <OderReview />
        </div>
      </div>
    </section>
  );
}

export default Checkout
