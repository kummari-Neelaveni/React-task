import React, { Component } from 'react';
import './App.css';

class Toggle extends Component {
  render() {
    const { isLogin } = this.props;

    return (
      <div className="container">
        <div className="form">
          <h2 className="heading">{isLogin ? 'Login' : 'Sign Up'}</h2>

          {isLogin ? (
            <div>
              <input type="text" placeholder="Username" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button className="button">Login</button>
            </div>
          ) : (
            <div>
              <input type="text" placeholder="Username" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button className="button">Sign Up</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Toggle;

