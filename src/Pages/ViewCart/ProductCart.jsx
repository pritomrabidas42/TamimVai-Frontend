import React from 'react'
import Cart from './Cart';
import CartTools from './CartTools';

const ProductCart = () => {
  
  return (
    <section className="py-16">
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1">
        <Cart />
        <CartTools />
      </div>
    </section>
  );
}

export default ProductCart
