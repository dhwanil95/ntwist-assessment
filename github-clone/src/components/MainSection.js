import React from 'react';

// Main Content Component containing parts 1, 2 and 3
function MainContent() {
    return (
        <div className="main-content">
            {/* Part 1: Top Repositories and Recent Activities */}
            <div className="part1">
                <div className="top-repo-header">
                    <h3>Top Repositories</h3>
                    <button className="new-btn">New</button>
                </div>
                <input type="text" placeholder="Find a repository ..." />
                <ul className="repo-list">
                    {/* Sample repository item */}
                    <li>
                        <span>dhwanil95/maxmind-exercise</span>
                    </li>
                    {/* ... Repeat similar list items for each repo */}
                </ul>
                <p className="showmore">show more</p>
                <h4>Recent activity</h4>
                <div className="activity">
                    <p>When you take actions across GitHub, we’ll provide links to that activity here.</p>
                </div>
            </div>

            {/* Part 2: Home, Updates and Trending Repositories */}
            <div className="part2">
                <div className="part2-header">
                    <span>Home</span>
                    <div className="right-controls">
                        <a href="#" className="send-feedback">Send feedback</a>
                        <button className="filter-button">Filter</button>
                    </div>
                </div>
                <div className="updates-section">
                    <h4>Updates to your homepage feed</h4>
                    <p>We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design. ✨</p>
                    <a className="learn-more" href="#">Learn more</a>
                </div>
                <div className="trending-section">
                    <div className="right-controls">
                        <p className="trending-repositories">Trending repositories</p>&nbsp;&nbsp;
                        <a href="#" className="send-feedback">See more</a>
                    </div>
                    {/* Sample Trending Repository Item */}
                    <div className="repository">
                        <h4>KillianLucas/open-interpreter</h4>
                        <p>OpenAI's Code Interpreter in your terminal, running locally</p>
                        <p>Python 10.2k</p>
                    </div>
                    <div className="repository">
                        <h4>opentffoundation/opentf</h4>
                        <p>OpenTF lets you declaratively manage your cloud infrastructure.</p>
                        <p>Go 4.3k</p>
                    </div>
                </div>
            </div>

            {/* Part 3: Latest Changes */}
            <div className="part3">
                <div className="latest-changes-box">
                    <h4>Latest changes</h4>
                    <p>6 hours ago</p>
                    <p>New 2FA account recovery options via password reset flow</p>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
