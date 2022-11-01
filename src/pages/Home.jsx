import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import PoductCard from "../components/main/PoductCard";
import axios from "axios";


const Home = ( ) => {
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = `https://fakestoreapi.com/products`;
      const response = await axios.get(URL);

      setProductData(response.data);
      // console.log(response.data);
    };
    fetchData();
  }, []);

  // prevent default state
  const handleSubmit = () => {
    e.preventDefault();
  };
  // search 

  // console.log(searchInput);



  return (
    <main className="py-4">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-semibold capitalize">
          search items
        </h1>

        <div className="flex items-center justify-center py-4">
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex items-center gap-x-3"
          >
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full rounded-md border bg-none p-1 px-2 text-black outline-none placeholder:text-black"
              placeholder="search product..."
            />
            <BiSearch size={30} className="cursor-pointer" />
          </form>
        </div>

        {/* adding the search functionality here too */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-14 gap-y-8">
         
          {productData.filter(product => product.title.toLowerCase().includes(searchInput)).map((product) => (
          
              <>
                <PoductCard key={product.id} product={product} />
              </>
            
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
