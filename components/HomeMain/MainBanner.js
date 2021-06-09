import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="it-services-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <h1
                                className="
                                    animate__animated 
                                    animate__fadeInLeft 
                                    animate__delay-0.1s
                                "
                            >RNDKONECT</h1>
                     
                            <p
                                className="
                                    animate__animated 
                                    animate__fadeInLeft 
                                    animate__delay-0.1s
                                "
                            ></p>
                        
                            <div className="btn-box animate__animated animate__fadeInRight animate__delay-0.1s">
                                <Link href="/contact">
                                    <a className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        Get Started <span></span>
                                    </a> 
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-image animate__animated animate__fadeInUp animate__delay-0.1s">
                            <img src="/img/banner-img1.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;