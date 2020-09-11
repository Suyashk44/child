import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <h1>Navbar</h1>
        <ul className="nav-links">
          <Link to="/" className="nav-link-style">
            <li>Home</li>
          </Link>
          <Link to="/about" className="nav-link-style">
            <li>About</li>
          </Link>
          <Link to="/shop" className="nav-link-style">
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
