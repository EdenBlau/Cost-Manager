import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Cost Manager</h1>

            <div className="links_container">
                <a className="links" href="/" >Home</a>
                <a className="links" href="/create" >About</a>
                <a className="links" href="/create2">Reports</a>
            </div>
        </nav>
    );
}

export default Navbar;