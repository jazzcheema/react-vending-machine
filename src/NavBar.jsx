import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/" className="Home-nav"> Home </Link>
      <Link to="/Chips" className="Chips-nav"> Chips </Link>
      <Link to="/Candy" className="Candy-nav"> Candy </Link>
      <Link to="/Soda" className="Soda-nav"> Soda </Link>
    </nav>
  );
}

export default NavBar;