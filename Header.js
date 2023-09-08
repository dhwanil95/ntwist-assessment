import React from 'react';

function Header() {
    return (
        <header className="header-container">
            <div className="logo-container">
                <img src="/ntwistlight.png" alt="Logo" className="logo" />
            </div>

            <nav>
                <div className="nav-links">
                    <a href="#"><b>Home</b></a>
                    <a href="#"><b>Industries</b></a>
                    <a href="#"><b>AI Software</b></a>
                    <a href="#"><b>Blog</b></a>
                    <a href="#"><b>Contact Us</b></a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
