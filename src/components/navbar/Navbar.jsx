import React from "react";
import "./Header.css";
import { BiSun, BiMoon, BiCart } from "react-icons/bi";
import { useState } from "react";
import { CartContext } from "../../UseContext/ContextProvider";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const { theme, setThemeMode } = useContext(CartContext);
  const [darkMode, setDarkMode] = useState(theme);

  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode]);

  // cart context
  const { isEmpty, totalItems } = useCart();

  return (
    <nav className="hidden capitalize lg:flex">
      <ul className="flex items-center space-x-10">
        <li className="nav-link">products</li>
        <li className="nav-link">about</li>

        <Link
          to="/cart"
          className="nav-link relative flex items-center justify-center gap-x-3 capitalize"
        >
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

export default Navbar;
