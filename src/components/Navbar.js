import React from "react";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar sticky-top p-0">
      <div className="nav1 container-fluid justify-content-end p-1">
        <a className="navbar-brand text-white user-select-none" href="#welcome">About</a>
        <a className="navbar-brand text-white user-select-none" href="#projects">Work</a>
        <a className="navbar-brand text-white user-select-none" href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
