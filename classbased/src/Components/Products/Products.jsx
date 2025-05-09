import React, { Component } from 'react';
import p_data from '../Product/data';
import Product from '../Product/Product';


export default class Products extends Component {
  render() {
    return (
      <div>
        {p_data.map((product) => {
          return (
            <>
             <Product propname={product}/>
            </>
          );
        })}
      </div>
    );
  }
}

