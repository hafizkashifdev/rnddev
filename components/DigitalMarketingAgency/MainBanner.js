import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="digital-agency-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                            <span className="sub-title">R&D Tax credit claims simplified</span>

                            <h1
                                className="
                                    animate__animated 
                                    animate__fadeInLeft 
                                    animate__delay-0.1s
                                "
                            >The simplest way is the right way. </h1>

                            <h3
                                className="
                                    animate__animated 
                                    animate__fadeInLeft 
                                    animate__delay-0.1s
                                "
                            >

                                <a href="/contact"> Contact us to get a free estimation</a>

                            </h3>


                            <a href="/how-it-works">Read More</a>


                            <div className="btn-box animate__animated animate__fadeInRight animate__delay-0.1s">
                                <Link href="/register-your-interests">
                                    <a className="default-btn">
                                        <i className="flaticon-right"></i>
                                        Book a free demo
                                    </a>
                                </Link>
                            </div>









                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-image animate__animated animate__fadeInUp animate__delay-0.1s">
                            <img src="/img/banner-img3.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;