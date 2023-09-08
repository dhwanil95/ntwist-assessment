import React from 'react';

// Footer Component
function Footer() {
    return (
        <footer>
            <span>© 2023 GitHub, Inc.</span>
            <br/><br/>  
            {/* Navigation rows with various links */}
            {["Blog", "API", "Terms", "About", "Training", "Privacy", "Shop", "Status", "Docs", "Contact GitHub", "Security", "Pricing"].map((item, index) => (
                (index % 3 === 0) && (
                    <div key={index} className="footer-row">
                        <div className="footer-links">
                            {[0, 1, 2].map(i => 
                                <a key={i} href="#">{["Blog", "API", "Terms", "About", "Training", "Privacy", "Shop", "Status", "Docs", "Contact GitHub", "Security", "Pricing"][index + i]}</a>
                            )}
                        </div>
                    </div>
                )
            ))}
        </footer>
    );
}

export default Footer;
