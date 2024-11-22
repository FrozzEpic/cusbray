import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Navbar = () => (
  <header className="navbar">
    <Link to="/" className="navbar-logo">Logo</Link>
    <div className="navbar-search">
      <input type="text" placeholder="Search" />
    </div>
    <ul className="nav-links">
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
    </ul>
  </header>
);

export default Navbar;
