import { useSelector } from "react-redux";

const OderReview = () => {
  const productList = useSelector((state) => state.cartList.product);
  const totalprice = productList.reduce(
    (total, products) => total + products?.allPrice,
    0
  );
  console.log(productList);
  
  return (
    <div className="">
      <h3 className="text-2xl text-primary font-Popins font-semibold pb-4">
        Your order
      </h3>

      <div className="checkout-review-order-table-wrapper overflow-x-auto">
        <table>
          <thead>
            <tr className="border-b font-Raleway text-lg text-primary font-medium ">
              <th className="text-left px-4 py-2">Product</th>
              <th className="text-right px-4 py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
          <tfoot>
            <tr className=" border-t">
              <th className="font-Raleway text-lg text-primary font-medium text-left px-4 py-2">
                Subtotal
              </th>
              <td className=" font-Monrope text-base font-normal text-primary text-right px-4 py-2">
                <span className="">$</span>
                {totalprice}
              </td>
            </tr>
            <tr className="border-t font-Raleway text-lg text-primary font-medium">
              <td className="text-left px-4 py-2">Shipping</td>
              <td className="px-4 py-2 text-right">Free shipping</td>
            </tr>
            <tr className="font-Raleway text-lg text-primary font-medium border-t">
              <td className="text-left px-4 py-2">Total</td>
              <td className="text-right px-4 py-2">
                <span className="">$</span>
                {totalprice}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className=" mt-8">
        <div className=" bg-[#289c28b3] p-6 rounded-lg">
          <p className="text-primary text-base font-normal font-NunitoFont">
            Sorry, it seems that there are no available payment methods. Please
            contact us if you require assistance or wish to make alternate
            arrangements.
          </p>
        </div>
        <div className=" mt-6">
          <p className="text-sm text-primary font-Popins font-normal pb-4">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
          <button
            type="submit"
            className=" text-white text-lg font-medium font-NunitoFont w-full py-4 rounded bg-secandari"
            id="place_order"
            value="Place order"
            data-value="Place order"
          >
            Place order
          </button>

          <input
            type="hidden"
            id="woocommerce-process-checkout-nonce"
            name="woocommerce-process-checkout-nonce"
            value="b861385f40"
          />
          <input
            type="hidden"
            name="_wp_http_referer"
            value="/smartic/?wc-ajax=update_order_review"
          />
        </div>
      </div>
    </div>
  );
};

export default OderReview;
