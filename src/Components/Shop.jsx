import PaginatedItems from "../Pages/Shop/PaginatedItems";
import Sliders from "../Pages/Shop/Sliders";

const Shop = () => {
  return (
    <div className="pt-20">
      <Sliders />
      <PaginatedItems itemsPerPage={6} />
    </div>
  );
};

export default Shop;
