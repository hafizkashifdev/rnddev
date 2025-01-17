import React from 'react';
import Link from 'next/link';

const AboutUsContent = () => {
return (
<section className="case-studies-details-area ptb-20">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="content">
                    <h3>Welcome to RnD Tax claims.</h3>
                    <p>
                        The UK government has launched R&D tax relief scheme to support companies that work on
                        projects in science and technology, that involves a certain degree of innovation. It can
                        be claimed by large or small companies, that seek to do some research or develop an
                        advance in their field.
                        <br/>
                        We will make R&D claim an easy, hassle free process from end to end.
                    </p>
                    <div className="text-center">
                        <img src="/img/about-us.png" alt="image" class="pt-3 pb-5" />
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <h3>We will ensure:</h3>
                            <div className="about-area">
                                <div className="about-content">
                                    <div className="content">
                                        <ul className="about-list mb-0">
                                            <li>
                                                <i className="flaticon-tick"></i>
                                                HMRC compliance
                                            </li>
                                            <li>
                                                <i className="flaticon-tick"></i>
                                                Simple process
                                            </li>
                                            <li>
                                                <i className="flaticon-tick"></i>
                                                Expert guidance
                                            </li>
                                            <li>
                                                <i className="flaticon-tick"></i>
                                                R&D calculation - estimate or final
                                            </li>
                                            <li>
                                                <i className="flaticon-tick"></i>
                                                R&D project report creation for submission to HMRC
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p>
                                <br/>
                                We specialise in R&D Tax Credit claims for organisations of all sizes.
                                <br/>
                                We have in-house experts ready to guide you through a claim step by step.
                                <br/>
                                Our services and pricing are tailored and structured to suit all organisations.
                            </p>
                        </div>
                        <div class="col-sm-6">
                            <div className="text-center">
                                <img src="/img/about-us-one.png" alt="image"  />
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