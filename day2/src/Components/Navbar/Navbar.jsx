
import './Navbar.css'

export function Navbar(){ //Named export so we should in the form named import
    return(
 <div className="navbar">
    <div className="logo">CARVILLA</div>
  <div className="nav-links">
    <a href="#">Home</a>
    <a href="#">Service</a>
    <a href="#">Featured Cars</a>
    <a href="#">New Cars</a>
    <a href="#">Brands</a>
    <a href="#">Contact</a>
  </div>
 </div>
    )
}


