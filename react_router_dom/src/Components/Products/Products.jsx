import React from 'react'
import "./Products.css"
import { Link } from 'react-router-dom';

const Products = (prop) => {
  console.log(prop,"prop")
  console.log(prop.productsData,"propdata") 
  // get allproducts
  const d=prop.productsData;
  return (
    <div className="products-container">
      {d.map((p)=>{
        console.log(p,"p")
        return(
          <div  className="product-card" key={p.id}>
          <h1>{p.title}</h1>
          <img src={p.thumbnail}></img>
          <h3>{p.price}</h3>
          <p>{p.category}</p>
          <p>{p.description}</p>
          <Link to={`/products/${p.id}`}> <button>View Details</button> </Link>


          </div>
        )
      })}
    </div>
  )
}

export default Products

