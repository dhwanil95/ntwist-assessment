import React from 'react';

// Main Header Component containing navigation and user controls
function Header() {
    return (
        <div className="header-container">
            <NavBar />
            <UserControls />
        </div>
    );
}

// Navigation Bar Component
function NavBar() {
    return (
        <div className="navbar">
            <img src="/download.png" alt="icon" className="icon" />
            {/* Navigation Items */}
            {["Product", "Solutions", "Open Source", "Pricing"].map(item => 
                <span key={item}>{item}</span>
            )}
        </div>
    );
}

// User Controls Component containing search bar, sign-in link, and sign-up button
function UserControls() {
    return (
        <div className="user-controls">
            <input type="text" placeholder="Search or jump to..." className="search-bar" />
            <a href="#" className="sign-in-link">Sign in</a>
            <button className="sign-up-btn-black">Sign up</button>
        </div>
    );
}

export default Header;
