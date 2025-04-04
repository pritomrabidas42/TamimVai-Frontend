const AllKindsOfCakes = () => {
  return (
    <section className="py-16 text-center bg-gray-50">
      <h2 className="text-3xl font-bold font-Opensans text-primary pb-10">
        All Kinds of Cakes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {["Chocolate", "Vanilla", "Strawberry", "Red Velvet"].map(
          (type, index) => (
            <div key={index} className="bg-white pb-4 rounded-lg shadow">
              <img
                src="home-2.jpg"
                alt={type}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-gray-600 text-sm font-normal font-Popins pt-2">
                {type} Cake
              </h3>
              <button className="mt-2 inline-block bg-secandari text-black text-base font-medium font-Monrope px-8 py-2.5 scale-95 rounded-lg cursor-pointer">
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
