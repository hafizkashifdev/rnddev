import React from 'react';
import Link from 'next/link';


const ServiceDetailsContent = () => {
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-12">
                        <div className="services-details-image">
                            <img src="/img/services/services-details1.jpg" alt="image" />
                        </div>

                        <div className="services-details-desc">

                            <h3>Free Demo</h3>
                            <p>What is R&D Tax Credits? We explain in simple terms</p>
                            <p>You are in control</p>
                            <p>We are there to provide a seamless claim process with the minimum impact on you time and a maximum claim value.</p>
                            <span className="sub-title">Contact us to get a free estimation</span>
                        </div>





                        <div className="services-details-desc">

                            <h3>What is R&D Tax Credits? We explain in simple terms</h3>
                            <p>Research and Development (R&D) reliefs support companies that work on innovative projects in science and technology. It can be claimed by a range of companies that seek to research or develop an advance in their field. It can even be claimed on unsuccessful projects.</p>
                            <p>You may be able to claim Corporation Tax relief if your project meets our definition of R&D.</p>



                            <h3>Projects that count as R&D</h3>
                            <p>The work that qualifies for R&D relief must be part of a specific project to make an advance in science or technology. It cannot be an advance within a social science - like economics - or a theoretical field - such as pure maths.</p>
                            <p>You may be able to claim Corporation Tax relief if your project meets our definition of R&D.</p>




                            <p>To get R&D relief you need to explain how a project:</p>
                            <ul>
                                <li>looked for an advance in science and technology</li>
                                <li>had to overcome uncertainty</li>
                                <li>tried to overcome this uncertainty</li>
                                <li>could not be easily worked out by a professional in the field</li>
                                <li>Your project may research or develop a new process, product or service or improve on an existing one.</li>

                            </ul>

                            <p>Your project may research or develop a new process, product or service or improve on an existing one.</p>

                            <h3>Advances in the field</h3>
                            <ul>
                            <li>Your project must aim to create an advance in the overall field, not just for your business. This means an advance cannot just be an existing technology that has been used for the first time in your sector.</li>
                            <li>The process, product or service can still be an advance if it’s been developed by another company but is not publicly known or available.</li>
                            <li>Show that a professional in the field could not work this out</li>
                            <li>You should explain why a professional could not easily work out your advance.</li>
                            <li>You can do this by showing that other attempts to find a solution had failed.</li>
                            <li>You can also show that the people working on your project are professionals in that field and get them to explain the uncertainties involved.</li>
                            </ul>

                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}

export default ServiceDetailsContent;