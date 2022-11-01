import React from "react";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

// utils
// import food from "../assets/food.jpg";

const Cart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <main className="mt-5 py-4">
      <div className="container mx-auto">
        <h1 className="my-4 text-center text-2xl font-semibold capitalize ">
          {isEmpty
            ? "Sapa Choke? Nothing Dey Your Cart sir"
            : "Baller, See Your Cart Item(s)"}
        </h1>

        <div className="">
          {items.map((item, index) => {
            return (
              <>
                <div key={index} className="mb-5 flex flex-col items-center justify-between gap-x-5 rounded-md bg-gray-800 py-5 px-4 text-white lg:flex-row">
                  <div className="flex items-center gap-x-5">
                    <img
                      src={item.image}
                      alt=""
                      className="h-44 w-44 rounded-md object-cover"
                    />
                    <div>
                      <h1 className="capitalize">plantain and chips</h1>
                    </div>
                  </div>

                  <div className="flex justify-between gap-x-3 gap-y-5 py-4 capitalize">
                    <h2>price: {item.price}</h2>
                    <h2>Quantity: {item.quantity}</h2>
                  </div>

                  {/* btns */}
                  <div className="flex gap-x-4 gap-y-4">
                    <button 
                      onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}
                    className="rounded-md bg-blue-500 p-1 px-3 text-white">
                      -
                    </button>
                    <button 
                      onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}
                    className="rounded-md bg-blue-500 p-1 px-3 text-white">
                      +
                    </button>
                    <button 
                      onClick={()=> removeItem(item.id)} 
                    className="rounded-md bg-red-500 p-1 px-3 text-white">
                      remove item
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* fixed bottom nav */}
      {/* setting the conditionals */}

      {!isEmpty && 
      <div className=" fixed bottom-0 w-full bg-gray-500 py-3 px-3 text-white">
      <div className="flex justify-between">
        <div className="flex items-center justify-center">
          <h1 className="text-center text-sm capitalize lg:text-xl">
            total: {cartTotal}
          </h1>
        </div>

        <div className="flex gap-x-3">
          <button
          onClick={()=> emptyCart()}
          className="flex items-center justify-center gap-x-2 rounded-md bg-red-500 p-2 px-5 text-white">
            <BsCartX />
            <h5 className="text-xl"> clear cart</h5>
          </button>

         <Link to='/thanks'>
         <button className="flex items-center justify-center gap-x-2 rounded-md bg-green-500 p-2 px-5 text-white">
            <BsCartCheck />
            <h5 className="text-xl">check out</h5>
          </button>
         </Link>
        </div>
      </div>
    </div>
      }
      
    </main>
  );
};

export default Cart;
