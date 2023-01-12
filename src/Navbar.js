import React from 'react';
import './Navbar.css';
import AppLogo from './AppLogo.JPG';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="backHome" href="/">
                <img className={"logo"} src={AppLogo} alt={"logo"}/>
            </a>

            <div className="links_container">
                <a className="links" href="/">Home</a>
                <a className="links" href="/about">About</a>
                <a className="links" href="/reports">Reports</a>
            </div>
        </nav>
    );
}

export default Navbar;
