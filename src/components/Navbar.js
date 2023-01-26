import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-center">
            <Link to="/"><h2 className="logo">Bartender Code</h2></Link>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
  </nav>
  )
}

export default Navbar
