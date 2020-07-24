import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Where in the world?</h1>
        <a href="#!" className="btn-toggle">
          <i className="far fa-moon"></i> Dark Mode
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
