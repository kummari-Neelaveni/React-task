import React, { Component } from 'react';


export default class Product extends Component {
  render() {
    console.log(this,"this")
     console.log(this.props.propname,"fghj")
    return (
      <div>
        <h1>{this.props.propname.title}</h1>

      </div>
    );
  }
}

