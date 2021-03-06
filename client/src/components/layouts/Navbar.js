import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html">
          <i className="fas fa-code" /> DevConnector
        </a>
      </h1>
      <ul>
        <li>
          {/* profile */}
          <a href="profiles.html">Developers</a>
        </li>
        <li>
          {/* register */}
          <a href="register.html">Register</a>
        </li>
        <li>
          <a href="login.html">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
