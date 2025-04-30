import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css"
const Navbar=()=>{
    return(
        <div className="navbar">
     <div>
     <span>Fregg</span>
     </div>
        
     
           
        <div className="navright">
            <Link id="link" to ="/home">
            <span>Home</span>
            </Link>

            <Link id="link" to ="/about">
            <span>About</span>
            </Link>

            <Link id="link" to ="/services">
            <span>Services</span>
            </Link>

            <Link id="link" to ="/contact">
            <span>Contact us</span>
            </Link>

            <Link id="link" to ="/products">
            <span>Products</span>
            </Link>
        </div>

           
       </div>
       
    )
}
export default Navbar;