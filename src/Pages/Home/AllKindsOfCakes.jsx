const AllKindsOfCakes = () => {
  return (
    <section className="py-10 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">All Kinds of Cakes</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {["Chocolate", "Vanilla", "Strawberry", "Red Velvet"].map(
          (type, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={`/cake-type-${index + 1}.jpg`}
                alt={type}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-2 font-bold">{type} Cake</h3>
              <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-lg">
                Explore
              </button>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default AllKindsOfCakes;
