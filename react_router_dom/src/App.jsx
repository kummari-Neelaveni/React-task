import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Products/Products";
import data from './Components/Products/pData'
console.log(data,"pdata") 
console.log(data.products, "pdata")
// get all products ad 
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Recepies from './Components/Recepies/Receipes'
import { Routes, Route } from "react-router-dom"; // ✅ FIXED
import Receipiedetails from "./Components/receipie details/Receipiedetails";

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
        {/* in products compuct comp props is passed to the Products.jsx  // ---passing app to the component products.jsx*/} 
        <Route path="/products/:id" element={<ProductDetails />} />


        <Route path="/receipes" element ={<Recepies/>}/> 
        {/* passing data from component to compont  */}
        <Route path="/receipes/:id" element={<Receipiedetails />} />

      </Routes> 
    
    </div>
  );
};

export default App;


