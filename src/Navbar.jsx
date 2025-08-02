import React, { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <nav className="p-5 shadow-sm fixed w-full bg-white z-40 top-0 left-0 right-0">
      <div className="container mx-auto px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-secandari font-Monrope text-2xl font-bold">
          Tamim Vai
        </Link>
        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-lg px-3 py-1 border border-gray-300  shadow-xs">
          <input
            type="text"
            placeholder="Search cakes..."
            className="outline-none px-2 py-1 text-gray-700 text-sm font-Nunito-font font-normal"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-primary font-Nunito-font text-base font-medium">
          <Link to="/" className="hover:text-secandari duration-200">
            Home
          </Link>
          <Link to="/product" className="hover:text-secandari duration-200">
            Product
          </Link>
          <Link to="/about" className="hover:text-secandari duration-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-secandari duration-200">
            Contact
          </Link>
        </ul>
        {/* Cart Icon & Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" text-primary hover:text-secandari duration-200 cursor-pointer"
          >
            {" "}
            <Menu  />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 shadow-lg p-4 z-50 w-full h-full flex flex-col items-center justify-center bg-[rgba(0,0,0,0.24)] ">
          <div onClick={() => setIsOpen(false)} className="w-1/2"></div>
          <div className="w-1/2 absolute right-0 top-0 h-full bg-white rounded-l-lg shadow-lg p-4 ">
            <ul className="flex items-center justify-between text-secandari font-Monrope text-2xl font-extrabold border-b border-brand">
              <li>Menu</li>
              <li><X
                onClick={() => setIsOpen(false)}
                className="text-base cursor-pointer text-brand duration-200 my-5"
              /></li>
            </ul>
            <ul className=" text-primary text-lg font-medium font-Monrope py-4 space-y-5">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-secandari duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-secandari duration-200"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-secandari duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-secandari duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
