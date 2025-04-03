import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-primary py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Logo and Description */}
        <div>
          <Link to='/' className="text-2xl font-Monrope text-secandari font-bold">SweetTreats</Link>
          <p className="text-sm mt-2">Delicious cakes made with love.</p>
        </div>

        {/* Navigation Links */}
        <ul className="mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="hover:underline">
              Shop
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#" className="hover:text-gray-200">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-200">
            Instagram
          </a>
          <a href="#" className="hover:text-gray-200">
            Twitter
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} SweetTreats. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
