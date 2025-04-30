import React from 'react'
import data from './data'
import "./Products.css"

const Products = () => {
  return (
    <div className='products_container'>
      { data.products.map((item,index)=>{
        return(
            <div key ={index} className='products'>
                <img src={item.thumbnail}></img>
                <h2>{item.title}</h2>
             
            </div>
        )
      })}
    </div>
  )
}

export default Products
