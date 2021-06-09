import React from 'react';
import Link from 'next/link';

const AboutUsContent = () => {
    return (
        <section className="case-studies-details-area ptb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="case-studies-details-image">
                        <img src="/img/projects/projects-details1.jpg" alt="image" />
                    </div>
                    <div className="case-studies-details-desc">
                        <span className="sub-title">About Product</span>
                        <h3>“Someone cloned the number plate of my car and I only realised once I started receiving different penalty charge notices (PCN) for traffic and parking offenses from areas where I had never been.”</h3>

                        <p>Not all charges are correct. If you believe this to be the case, the charge must be challenged through the PCN appeals process, which can be long and complex.</p>

                        <p>Experience and curiosity to understand the PCN process and appeal system gave rise to an idea to simplify the system for the benefit of all.</p>
                        <p>PPCN (Pay PCN) is a comprehensive, digital platform for the entire PCN process with full support and guidance. This platform allows drivers to manage everything in one place, from PCNs to parking.</p>                        
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="image">
                                    <img src="/img/projects/project2.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="content">
                                    <h3>Some of the benefits of our system include:</h3>
                                    <ul>
                                        <li>A significant reduction in the time it takes for the alleged offender to be notified of the PCN.</li>
                                        <li>An eco-friendly transformation of the PCN paper process into a digital platform.</li>
                                        <li>Direct payment of the PCN from our platform.</li>
                                        <li>Support and guidance through the appeals process.</li>
                                        <li>The ability to search for and book a parking space near you.</li>                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

             
            </div>
        </div>
    </section>    
    )
}

export default AboutUsContent;