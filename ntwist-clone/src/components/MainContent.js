import React from 'react';

function MainContent() {
    const sections = [
        {
            heading: "Innovation in Tech",
            content: "Discover the latest advancements in technology and their impact on modern industries."
        },
        {
            heading: "Sustainability & Environment",
            content: "Learn about our commitment to a green and sustainable future for our planet."
        },
        {
            heading: "Data-driven Insights",
            content: "Harness the power of big data to derive actionable insights for your business."
        },
        {
            heading: "Our Global Outreach",
            content: "Engage with our global community of experts, enthusiasts, and partners."
        }
    ];

    return (
        <main className="main-content">
            {/* Initial content with background */}
            <div className="intro-content">
                <div className="content-for-more">
                    <div class="content-top">Data-powered Solutions for Industrial Excellence</div>
                    <button className="read-more-btn">Read more</button>
                </div>
            </div>
        </main>
    );
}

export default MainContent;
