import AboutUs from "../Pages/About/AboutUs";
import PaginatedItems from "../Pages/Shop/PaginatedItems";

const Shop = () => {
  return (
    <div className="pt-20">
      <h1 className="text-3xl uppercase font-Nunito-font pt-10 font-bold text-center">Our Products</h1>
      <p className="text-center text-gray-600 py-2">Discover our range of delicious treats made with love.</p>
      <PaginatedItems itemsPerPage={16} />
    </div>
  );
};

export default Shop;
