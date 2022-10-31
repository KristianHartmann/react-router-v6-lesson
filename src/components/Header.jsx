import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/schoolhacks-logo.png";
import "../styles/main.css";

export const Header = () => {
  return (
    <header className="container">
  <Link to={`/`}>
    <img
      className="logo"
      src={logo}
      Link
      alt="SchoolHacks logo"
      title="SchoolHacks | Home"
    />
  </Link>
  <nav>{<Link to={`/workshops`}>Workshops</Link>}</nav>
  <nav>{<Link to={`/`}>Home</Link>}</nav>
  <nav>{<Link to={`/about`}>About</Link>}</nav>
</header>
  )
}



export default Header;
