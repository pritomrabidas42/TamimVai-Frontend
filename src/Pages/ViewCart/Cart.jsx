import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/counter/counterSlice";
const Cart = () => {
  const productList = useSelector((state) => state.cartList.product);
  const dispatch = useDispatch();
  return (
    <div className=" mx-auto sm:p-4 p-1">
      <form className="bg-white rounded-lg sm:p-6 p-1">
        <table className="h-[200px] overflow-y-scroll">
          <thead>
            <tr className="w-full">
              <th className="sm:p-3 p-2 text-primary font-Popins text-[10px] sm:text-sm font-medium">
                Remove
              </th>
              <th className="sm:p-3 p-2 text-primary font-Popins sm:text-sm text-[10px] font-medium">
                Thumbnail
              </th>
              <th className="sm:p-3 p-2 text-primary font-Popins text-[10px] sm:text-sm font-medium">
                Product
              </th>
              <th className="sm:p-3 p-2 text-primary font-Popins text-[10px] sm:text-sm font-medium">
                Price
              </th>
              <th className="sm:p-3 p-2 text-primary font-Popins text-[10px] sm:text-sm font-medium">
                Quantity
              </th>
              <th className="sm:p-3 p-2 text-primary font-Popins text-[10px] sm:text-sm font-medium">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {productList.map((item) => (
              <tr key={item.id} className="border-t border-gray-300 ">
                <td className="sm:p-2 p-1 text-center">
                  <button
                    onClick={() => dispatch(removeFromCart(item?.id))}
                    className="text-red-500 cursor-pointer text-xl"
                  >
                    ×
                  </button>
                </td>
                <td className="sm:p-2 p-1">
                  <img
                    src={item?.images}
                    alt={item?.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                </td>
                <td className="sm:p-2 p-1 text-primary font-NunitoFont sm:text-sm text-[10px] font-normal ">
                  {item?.title.substring(0, 16)} ...
                </td>
                <td className="sm:p-2 p-1 text-primary font-Monrope sm:text-sm text-[10px] font-normal">
                  ${item?.price}
                </td>
                <td className="sm:p-2 p-1 text-primary font-Monrope sm:text-sm text-[10px] font-normal items-center ">
                  <button className="text-base px-1">{item.quantity}</button>
                </td>
                <td className="sm:p-2 p-1 text-primary font-Monrope sm:text-sm text-[10px] font-normal">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex justify-between items-center ">
          <div className="grid sm:grid-cols-3 grid-cols-2">
            <input
              type="text"
              placeholder="Coupon code"
              className="border focus:outline-secandari duration-200 p-2.5 mr-2  text-primary font-NunitoFont text-xs sm:text-sm font-normal  rounded mb-3"
            />
            <button className="bg-gray-700 text-xs sm:text-sm text-white px-6 py-2.5 rounded h-fit w-fit">
              Apply Coupon
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cart;
