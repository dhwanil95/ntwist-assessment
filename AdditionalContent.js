import React from 'react';

function AdditionalContent() {
    const sections = [
        {
            heading: "Mine-To-Mill-To-Mine Optimization",
            content: "NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans."
        },
        {
            heading: "Sustainability",
            content: "Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers. \nWith the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics."
        },
        {
            heading: "Mineral Processing",
            content: "NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption."
        },
        {
            heading: "Oil & Gas",
            content: "Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. \nNTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety."
        }
    ];

    return (
        <main className="main-content">
            {/* Additional content sections on a plain white background */}
            <div className="additional-content">
                 {sections.map((section, index) => (
                    <div>
                        <br/><br/><br/>
                     <div className={`content-section ${index % 2 === 0 ? 'odd' : 'even'}`} key={index}>
                         <div className="text-part">
                             <h2 className="additional-heading">{section.heading}</h2>
                             <p className="additional-data">{section.content}</p>
                             <button className="read-more-btn1">Read more</button>
                         </div>
                         <div className="image-part">
                             {/* Placeholder image. Replace with your images */}
                             <img src={`/image${index + 1}.jpg`} alt={`section ${index + 1} content image`} />
                            
                         </div>
                     </div>
                    </div>
                 ))}
             </div>
        </main>
    );
}

export default AdditionalContent;
