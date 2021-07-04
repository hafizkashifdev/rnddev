import React from 'react';
import Link from 'next/link';

const RegisterYourInterestsInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>Our Address</h3>
                             <p>
                            <a href="https://goo.gl/maps/GrZksuyEGiJMuu9aA" target="_blank">
                                Office 77, Spaces Heathrow Airport, 4 Roundwood Avenue, Stockley Park, <br />
                                Uxbridge, UB11 1AF<br /> United Kingdom
                            </a>
                        </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>Contact</h3>
                           <p>Mobile: <a href="tel:+4447500287504">(+44) - 750028 - 7504</a></p>
                    <p>E-mail: <a href="mailto:contact-us@rndtaxclaims.co.uk">contact-us@rndtaxclaims.co.uk</a></p> 
                        </div>
                    </div>
 
                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <h3>Hours of Operation</h3>
                            <p>Monday - Friday: 09:00 AM - 05:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterYourInterestsInfo;