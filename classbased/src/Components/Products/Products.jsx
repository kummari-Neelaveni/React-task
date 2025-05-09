import React, { Component } from "react";

import p_Data from "../../data";
console.log(p_Data)
import Product from "../Product/Product";
export default class Products extends Component {
  render() {
    return (
      <div className="product-wrapper">
        {p_Data.map((a) => {
          console.log(a)
          return (
            <>
              {/* <h1>{a.title}</h1> */}
              <Product propname={a} />
            </>
          );
        })}
      </div>
    );
  }
}



