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



                            <div className="col-lg-8 col-md-6">
                                <div className="content">
                                    <h3>Information About Us</h3>
                                    <ul>
                                        <li>1. We own and operate Our Site.</li>
                                        <li>2. Our VAT number is ________.</li>
                                        <li>3. Our Data Protection Officer is contactable by email at ________ or by post at __________________.</li>
                                    </ul>
                                </div>
                            </div>










                            <p>The UK government has launched R&D tax relief scheme to support companies that work on projects in science and technology, that involves a certain degree of innovation. It can be claimed by large or small companies, that seek to do some research or develop an advance in their field.</p>
                            <p>We will make R&D claim an easy, hassle free process from end to end.</p>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <img src="/img/projects/project2.jpg" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h3>We will ensure:</h3>
                                        <ul>
                                            <li>HMRC compliance</li>
                                            <li>Simple process</li>
                                            <li>Expert guidance</li>
                                            <li>R&D calculation - estimate or final</li>
                                            <li>R&D project report creation for submission to HMRC</li>
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