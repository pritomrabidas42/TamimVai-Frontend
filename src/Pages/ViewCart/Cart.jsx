import React, { useState } from 'react'

const Cart = () => {
    const [cartItems, setCartItems] = useState([
      {
        id: "956adf8f21dff76b502290b42a69ee07",
        name: "Intense...",
        price: 270.88,
        quantity: 7,
        image: "/contact-4.jpg",
      },
    ]);

    const handleQuantityChange = (id, newQuantity) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    };

    const handleRemove = (id) => {
      setCartItems(cartItems.filter((item) => item.id !== id));
    };
  return (
    <div className=" mx-auto sm:p-4 p-1">
      <form className="bg-white rounded-lg sm:p-6 p-1">
        <table className=" ">
          <tr className="w-full ">
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
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t border-gray-300">
                <td className="sm:p-2 p-1 text-center">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 text-xl"
                  >
                    ×
                  </button>
                </td>
                <td className="sm:p-2 p-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                </td>
                <td className="sm:p-2 p-1 text-primary font-NunitoFont sm:text-sm text-[10px] font-normal ">
                  {item.name}
                </td>
                <td className="sm:p-2 p-1 text-primary font-Monrope sm:text-sm text-[10px] font-normal">
                  ${item.price.toFixed(2)}
                </td>
                <td className="sm:p-2 p-1 text-primary font-Monrope sm:text-sm text-[10px] font-normal">
                  <input
                    type="number"
                    className="border p-1 w-10 sm:w-16"
                    value={item.quantity}
                    min="0"
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                  />
                </td>
                <td className="sm:p-2 p-1 text-primary font-Monrope sm:text-sm text-[10px] font-normal">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex justify-between items-center">
          <div className="grid sm:grid-cols-3 grid-cols-2">
            <input
              type="text"
              placeholder="Coupon code"
              className="border focus:outline-secandari duration-200 p-2.5 mr-2  text-primary font-NunitoFont text-xs sm:text-sm font-normal  rounded mb-3"
            />
            <button className="bg-gray-700 text-xs sm:text-sm text-white px-6 py-2.5 rounded h-fit w-fit">
              Apply Coupon
            </button>
            <button className="bg-blue-600 text-white px-4 py-2.5 rounded text-xs sm:text-sm font-medium font-NunitoFont h-fit w-fit">
              Update Cart
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cart
