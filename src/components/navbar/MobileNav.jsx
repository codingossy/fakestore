import React from "react";
import "./Header.css";
import { BiSun, BiMoon, BiCart } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const MobileNav = ({ setNavMobile }) => {
  const { isEmpty, totalItems } = useCart();

  return (
    <nav className="h-full w-full bg-black text-gray-300 lg:hidden">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="absolute right-6 top-6 cursor-pointer text-3xl "
      />

      <ul className="font-secondary flex h-full flex-col items-center justify-center space-y-8 capitalize">
        <li className="nav-link">
          <BiSun size={25} />
        </li>

        <Link
          to="/cart"
          className="nav-link relative flex items-center justify-center gap-x-3 capitalize"
        >
          <li className="nav-link">products</li>
          <li className="nav-link">about</li>

          <BiCart size={30} className="mr-3" />
          {!isEmpty && (
            <span className="absolute left-2 -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 p-2 font-bold">
              {totalItems}
            </span>
          )}
          <span>Cart</span>
        </Link>
      </ul>
    </nav>
  );
};

export default MobileNav;
