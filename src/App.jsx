import { useState } from "react";
import Header from "./components/navbar/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import { GlobalThemeProvider } from "./UseContext/ContextProvider";
import { Thankyou } from "./pages/Thankyou";

// pages

function App() {
  const [theme] = GlobalThemeProvider();

  return (
    <Router>
    <div className={`${theme ? 'bg-black' : 'bg-white'}overflow-y-auto h-screen`}>
      
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="product-details/:id" element={<ProductDetails />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/thanks" element={<Thankyou />}/>
        </Routes>
   
    </div>
    </Router>
  );
}

export default App;
