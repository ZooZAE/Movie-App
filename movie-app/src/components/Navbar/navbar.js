/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

//Simple navbar that will be used in all pages
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-light">
            <Link className="navbar-brand navbar-title" to="/">Movie App</Link>
        </nav>
    )
}

export default Navbar;