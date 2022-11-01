import React from "react";
import { useCart } from "react-use-cart";

// icons
import { Link } from "react-router-dom";
import { BsCartCheck, BsCartX } from "react-icons/bs";

// utils
import img from "../../assets/food.jpg";

const PoductCard = ({ product }) => {
  // const { id } =product.data
  const { addItem } = useCart();

  const addToCart = () => {
    addItem(product);
  };

  return (
    <>
      <section className="container mx-auto flex h-auto w-[20rem] flex-col rounded-md bg-white px-2 text-center text-black">
        <Link to={`/product-details/${product.id}`}>
          <div className="overflow-hidden bg-gray-400">
            <img src={product.image} alt="" className="h-72 w-full" />
          </div>
        </Link>

        <main className="bg-white text-black">
          <div className="pt-4">
            <h1 className="px-2 text-center capitalize">{product.title}</h1>
          </div>
          <div className="price">${product.price}</div>

          <div className="flex items-center justify-center py-5">
            <button
              onClick={() => addToCart()}
              className="flex items-center justify-center gap-x-2 rounded-md bg-green-500 p-3 px-5 text-white"
            >
              <BsCartX />
              <h5 className="text-xl">add to cart</h5>
            </button>
          </div>
        </main>
      </section>
    </>
  );
};

export default PoductCard;
