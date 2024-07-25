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
                            <a href="https://www.google.com/maps/place/Rehman+Michael+%26+Co/@53.8174939,-1.519191,17z/data=!3m1!4b1!4m6!3m5!1s0x48795b89087fc309:0x9205d52db35d47af!8m2!3d53.8174908!4d-1.5166161!16s%2Fg%2F1tf6lqs1?entry=ttu" target="_blank">
                                Rehman Michael & Co
277 Roundhay Rd
Harehills, Leeds LS8 4HS
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
                           <p>Mobile: <a href="tel:+4447500287504">+44 (0)113 248 5664</a></p>
                    <p>E-mail: <a href="mailto:anwar@rehman-michael.com">anwar@rehman-michael.com</a></p> 
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
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterYourInterestsInfo;