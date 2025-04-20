import { useSelector } from "react-redux";
import ProductCart from "../Pages/ViewCart/ProductCart";

const ViewCart = () => {
  const productList = useSelector((state) => state.cartList.product);
  return (
    <div className="pt-20">
      {productList.length > 0 ? (
        <ProductCart />
      ) : (
        <p className="py-10 text-center items-center flex justify-center font-medium font-Nunito-font text-2xl text-secandari">
          There are no items in this cart!
        </p>
      )}
    </div>
  );
};

export default ViewCart;
