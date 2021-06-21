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
                        RNDTAXCLAIMS Limited is a registered in Scotland with company number 12125945 Authorised and
                        regulated by the Financial Conduct Authority. RNDTAXCLAIMS is entered on the Financial
                        Services Register <a href="#">https://register.rndtaxclaims.org.uk/</a> under reference 945321.
                        <br/>
                        If you wish to register a complaint, please write to us at the address above or e-mail us at
                        complaints@rndtaxclaims.co.uk
                    </p>

                    <ul className="social-link">
                        <li>
                            <Link href="https://www.facebook.com/RnD-Tax-Claims-108095721497153">
                            <a className="d-block" target="_blank">
                                <i className='bx bxl-facebook'></i>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.youtube.com/channel/UCpN6gJW506u7K0xCs6_kDtg">
                            <a className="d-block" target="_blank">
                                <i className='bx bxl-youtube'></i>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/RnD_TaxClaims">
                            <a className="d-block" target="_blank">
                                <i className='bx bxl-twitter'></i>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/rnd89241/">
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
                            150 Whitacres Road, Glasgow, G53 7LJ, <br /> Scotland
                        </li>
                        <li>
                            <i className='bx bx-phone-call'></i>
                            <a href="tel:07500287504">07500287504</a>
                        </li>
                        <li>
                            <i className='bx bx-envelope'></i>
                            <a href="#">info@rndtaxclaims.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-bottom-area">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <p>Copyright &copy;{currentYear} All rights reserved by <a target="_blank"
                            href="https://envytheme.com/"> <strong>RNDTAXCLAIMS</strong> </a></p>
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