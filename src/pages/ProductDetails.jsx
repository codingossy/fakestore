import React, { useState, useEffect } from "react";
import Lightbox from "react-lightbox-component";

// icons
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import axios from "axios";



const ProductDetails = ( {product }) => {
  const [productData, setProductData] = useState([]);
  const { addItem } = useCart();

  useEffect(() => {
    const getProductDetails = async() => {
      const URL = `https://fakestoreapi.com/products/${product.id}`
      const response = await axios.get(URL)

      setProductData(response.data)
      console.log(response.data)
    } 

    getProductDetails()
  }, [])



  return (
    <div className="py-5">
      <div className="container mx-auto">
        <h1 className="text-center text-2xl font-semibold uppercase">
          product details
        </h1>
        <div className="grid grid-cols-1 place-items-center py-5 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <Lightbox
            images={[
              {
                src: productData.image,
                title: productData.title,
                description: "img 1",
              },
              {
                src: productData.image,
                title: productData.title,
                description: "img 2",
              },
              {
                src: productData.image,
                title: productData.title,
                description: "img 3",
              },
              {
                src: productData.image,
                title: productData.title,
                description: "img 4",
              },
            ]}
          />
          </div>

          <div className="flex flex-col items-start justify-start">
            <h1 className="mb-3 capitalize">{productData.title}</h1>
            <button onClick={()=>addItem(productData)} className="mb-4 flex items-start justify-start gap-x-2 rounded-md bg-green-500 p-3 px-5 text-white">
              <BsCartPlus />
              <h5 className="text-sm capitalize">add to cart</h5>
            </button>
            <h1 className="capitalize">price: {productData.price}</h1>
            <p className="flex items-center gap-x-4 ">
              {" "}
              Rating: 5.0{" "}
              <FaStar className="border-white text-yellow-500 outline-white" />
            </p>

            <div className="py-2 ">
              <p className="max-w-[400px]">
              {productData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
