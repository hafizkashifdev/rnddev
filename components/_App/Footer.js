import React from 'react';
import Link from 'next/link';

const Footer = () => {

const currentYear = new Date().getFullYear();

return (
<footer className="footer-area bg-color">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-sm-6">
                <div className="single-footer-widget">
                    <a href="/" className="logo">
                        <img src="/img/logo.png" alt="logo" />
                    </a>
                    <p>
                        RNDTAXCLAIMS Limited is a registered in Scotland with company number SC670951 Authorised and
                        regulated by the Financial Conduct Authority. RNDTAXCLAIMS is entered on the Financial
                        Services Register <a href="#">https://register.rnd.org.uk/</a> under reference 945321.
                        <br/>
                        If you wish to register a complaint, please write to us at the address above or e-mail us at
                        complaints@rnd.co.uk
                    </p>

                    <ul className="social-link">
                        <li>
                            <Link href="#">
                            <a className="d-block" target="_blank">
                                <i className='bx bxl-facebook'></i>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                            <a className="d-block" target="_blank">
                                <i className='bx bxl-twitter'></i>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                            <a className="d-block" target="_blank">
                                <i className='bx bxl-instagram'></i>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                            <a className="d-block" target="_blank">
                                <i className='bx bxl-linkedin'></i>
                            </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>



            <div className="col-lg-4 col-sm-6">
                <div className="single-footer-widget">
                    <h3>Address</h3>

                    <ul className="footer-contact-info">
                        <li>
                            <i className='bx bx-map'></i>
                            175 5th Ave, New York, NY 10010, <br /> United States
                        </li>
                        <li>
                            <i className='bx bx-phone-call'></i>
                            <a href="tel:+44587154756">+1 (123) 456 7890</a>
                        </li>
                        <li>
                            <i className='bx bx-envelope'></i>
                            <a href="#">info@rnd.com</a>
                        </li>
                        <li>
                            <i className='bx bxs-inbox'></i>
                            <a href="tel:+557854578964">+55 785 4578964</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-bottom-area">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <p>Copyright &copy;{currentYear} All rights reserved <a target="_blank"
                            href="https://envytheme.com/"> <strong>Share My Dine</strong> </a></p>
                </div>

                <div className="col-lg-6 col-md-6">
                    <ul>
                        <li>
                            <Link href="/cookie-policy">
                            <a>Cookie Policy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy">
                            <a>Privacy Policy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-and-conditions">
                            <a>Terms & Conditions</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="footer-map">
        <img src="/img/footer-map.png" alt="image" />
    </div>
</footer>
);
}

export default Footer;