import React from 'react'
import "./Product.css"
export default class Product extends React.Component {
  render() {
    // console.log(this,"this")
    console.log(this.props.propname)
    return (
      
     <div className="product-container">
     <h1>{this.props.propname.title}</h1>
     <img src={this.props.propname.image}></img>
     <h3>{this.props.propname.price}</h3>
     <p>{this.props.propname.description}</p>
     </div>
     
    )
  }
}


