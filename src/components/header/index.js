import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <header className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to='/'>Home</NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to='/weather'>Weather</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/racer'>Racer</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/checkout'>Checkout</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
