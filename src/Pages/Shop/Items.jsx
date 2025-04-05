import React from 'react'

const Items = ({ currentItems }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {currentItems &&
        currentItems.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-red-500 font-bold">{product.price}</p>
          </div>
        ))}
      
    </div>
  );
};

export default Items
