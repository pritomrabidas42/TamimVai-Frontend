import React from 'react'

const NewArrivals = () => {
  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-bold mb-6">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {["Cake 1", "Cake 2", "Cake 3"].map((cake, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={`/cake-${index + 1}.jpg`}
              alt={cake}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-2 font-bold">{cake}</h3>
            <p className="text-gray-600">Delicious and fresh</p>
            <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals
