import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartTools = () => {
  const [shippingVisible, setShippingVisible] = useState(false);
  const [formData, setFormData] = useState({
    country: "default",
    city: "",
    postcode: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="p-6 border-2 rounded-lg shadow-sm w-80 sm:w-96 justify-center mx-auto mt-5 sm:mt-2">
      <h2 className="sm:text-xl text-base font-medium text-primary font-Popins mb-4">
        Cart Totals
      </h2>
      <table className="w-full text-left border-collapse">
        <tbody>
          <tr className="border-b">
            <th className="p-2 font-medium text-primary font-Popins sm:text-base text-sm ">
              Subtotal
            </th>
            <td className="p-2 font-medium text-primary font-Monrope sm:text-base text-sm">
              $1,896.16
            </td>
          </tr>
          <tr className="border-b">
            <th className="p-2 font-medium text-primary font-Popins sm:text-base text-sm">
              Shipping
            </th>
            <td className="p-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked
                  readOnly
                  className="mr-2 font-Popins font-normal sm:text-base text-sm text-primary"
                />{" "}
                Free Shipping
              </label>
              <p className="sm:text-sm text-xs font-normal font-NunitoFont text-gray-600">
                Shipping options will be updated during checkout.
              </p>
              <button
                className="mt-2 sm:text-sm text-xs font-normal font-NunitoFont text-secandari hover:underline"
                onClick={() => setShippingVisible(!shippingVisible)}
              >
                Calculate shipping
              </button>
              {shippingVisible && (
                <div className="mt-4 space-y-2">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="default">Select a country...</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Postcode / ZIP"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                  <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Update
                  </button>
                </div>
              )}
            </td>
          </tr>
          <tr>
            <th className="p-2 font-medium text-primary font-Popins tsm:text-base text-sm">
              Total
            </th>
            <td className="p-2 font-medium text-primary font-Monrope text-base">
              $1,896.16
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <Link
          to="/checkout"
          className="block w-full text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 sm:text-sm text-xs font-medium font-NunitoFont"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartTools;
