import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShouldRedirect(true);
  }
  const handleLogin = () => setIsLoggedIn(true);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/"><h2 className="logo">Bartender Code</h2></Link>
          <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              
              {isLoggedIn ? (
              <>
                <li>
                  <div onClick={toggleDropdown}>
                    <a className="dropdown-username">Username</a>
                    {dropdownOpen && (
                      <ul className="dropdown">
                        <li><Link to="/logout" onClick={handleLogout}>Logout</Link></li>
                      </ul>
                    )}
                  </div>
                </li>
              </>
              ) 
              : 
              (
              <li><Link to="/login" onClick={handleLogin}>Login</Link></li>
              )}
            </ul>
            {shouldRedirect && <Redirect to="/home" />}
      </div>
    </nav>
  )
}

export default Navbar;
