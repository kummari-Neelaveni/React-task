import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Products/Products";
import data from './Components/Products/pData'
console.log(data,"data") 
// get all products ad 
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { Routes, Route } from "react-router-dom"; // ✅ FIXED

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Products productsData={data.products}/>} />  
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes> 
    
    </div>
  );
};

export default App;


