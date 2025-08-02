import PaginatedItems from "../Pages/Products/PaginatedItems";

const Product = () => {
  return (
    <div className="pt-20">
      <h1 className="text-3xl uppercase font-Nunito-font pt-10 font-bold text-center">Our Products</h1>
      <p className="text-center text-gray-600 py-2">Discover our range of delicious treats made with love.</p>
      <PaginatedItems itemsPerPage={16} />
    </div>
  );
};

export default Product;
