import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import Said from "./Components/Home/Home"
import About from "./Components/Home/About"
import Contact from "./Components/Home/Contact";
import Products from "./Components/Products/Products";
import { Routes,Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
     <div>
      
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Said/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contacts" element={<Contact/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
      </Routes>
   
     
    

     </div>
    );
  }
}

export default App;

