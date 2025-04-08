import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const ShopingCart = ({setShop}) => {
  return (
    <div className="absolute w-full top-0 left-0 bg-[rgba(0,0,0,0.17)] flex transition-all duration-500 h-screen">
      <div
        onClick={() => setShop(true)}
        className="lg:w-[55%] xl:w-[65%] md:w-[35%] sm:w-[40%] w-[5%] cursor-pointer"
      ></div>
      <div className="fixed right-0  bg-white xl:w-[35%] lg:w-[45%] md:w-[65%] sm:w-[60%] w-[85%] h-[98%] items-center top-1 bottom-2  shadow-md rounded-l-2xl px-1 sm:px-4 md:px-8 py-4 z-50">
        <p
          onClick={() => setShop(true)}
          className=" absolute -left-5 border-[4px] text-white bg-secandari duration-100 p-2 w-fit rounded-full drop-shadow-sm cursor-pointer"
        >
          <RxCross2 className=" text-lg" />
        </p>
        <div className="p-5 h-full">
          <li className="text-4xl font-bold font-Montez text-secandari cursor-default pb-10">
            Shopping Cart
          </li>
          <div className="h-[60%] overflow-y-scroll">
            <ul className="space-y-2 px-5">
              <li className="flex items-center gap-4 border-b pb-3 mr-5">
                <img
                  width={100}
                  height={100}
                  src="/contact.jpg"
                  alt="image"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p className="text-sm font-Opensans font-medium hover:text-secandari duration-200">
                    hello shop
                  </p>
                  <p className="text-sm text-primary font-normal font-Monrope">
                    1 <span className="font-semibold text-secandari">$10</span>
                  </p>
                </div>
                <button className="text-secandari border-secandari rounded-full p-1 border cursor-pointer duration-200 hover:text-red-500 hover:border-red-500">
                  <RxCross2 className="text-[10px] " />
                </button>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="flex justify-between px-5 mt-6 border-t">
              <p className="pt-4 font-semibold text-xl text-primary font-NunitoFont">
                Subtotal :
              </p>
              <span className="text-secandari font-medium font-Monrope text-lg pt-4">
                $10
              </span>
            </div>
            <div className="mt-4 px-5 flex justify-between">
              <Link
                to="/viewcart"
                onClick={() => setShop(true)}
                className=" sm:px-8 px-4 py-2 rounded-md font-NunitoFont font-medium sm:text-lg text-base text-primary border border-primary hover:text-secandari hover:border-secandari duration-400"
              >
                View Cart
              </Link>
              <Link
                to="/checkout"
                onClick={() => setShop(true)}
                className="bg-primary text-white duration-300 hover:bg-secandari font-NunitoFont font-medium sm:text-lg text-base sm:px-8 px-4 py-2 rounded-md"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
