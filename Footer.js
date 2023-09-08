import React from 'react';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="logo-container">
                <img src="/ntwistlight.png" alt="Logo" className="logo" />
            </div>
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Sitemap</a>
                </div>
                <br/>
                <div className="footer-address">
                    9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
                </div>
                <div className="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
            <br/>
            <div className="copyright">
                © 2022. Ntwist Inc.
            </div>
        </footer>
    );
}

export default Footer;
