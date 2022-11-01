import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";


const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="py-3 bg-gray-800 text-white">
      <div className="mx-auto container">
        <div className="flex items-center justify-between">
         <Link to='/'><h1>Fake Store</h1></Link>

          <Navbar />

          {/* mobile nav functionality */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl cursor-pointer"
          />

          <div className={`${navMobile ? "-right-0" : "-right-full"} toggle `}>
            <MobileNav setNavMobile={setNavMobile} />
          </div>

          {/* mobile nav ends */}
        </div>
      </div>
    </header>
  );
};

export default Header;
