import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">logo</div>

        <div className="navbar_links">
          <Link to="/home"><span>Home</span></Link>
          <Link to="/about"><span>About</span></Link>
          <Link to="/contacts"><span>Contacts</span></Link>
          <Link to="/Products"><span>Products</span></Link>
        </div>
      </div>
    );
  }
}

