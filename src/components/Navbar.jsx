
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Logo size="medium" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/tutors" onClick={closeMenu}>Tutors</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/admin-dashboard" onClick={closeMenu}>Admin</Link>
      </div>

      {/* Center Buttons */}
      {/* <div className="nav-center">
        <button onClick={() => { navigate("/login"); closeMenu(); }}>Login</button>
        <button onClick={() => { navigate("/register"); closeMenu(); }}>Register</button>
      </div> */}
    </nav>
  );
}

export default Navbar;
