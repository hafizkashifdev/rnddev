import React from "react";
import Link from "next/link";

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
                REHMAN MICHAEL (ACCOUNTANTS) LIMITED  is a company registered in
                England and Wales with registered company number 07537744
              </p>
              <ul className="social-link">
                <li>
                  <Link href="https://www.facebook.com/RnD-Tax-Claims-108095721497153">
                    <a className="d-block" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/channel/UCpN6gJW506u7K0xCs6_kDtg">
                    <a className="d-block" target="_blank">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/RnD__TaxClaims">
                    <a className="d-block" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/rnd_taxclaims/">
                    <a className="d-block" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/rnd-tax-claims/">
                    <a className="d-block" target="_blank">
                      <i className="bx bxl-linkedin"></i>
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
                  <a
                    href="https://goo.gl/maps/GrZksuyEGiJMuu9aA"
                    target="_blanl"
                  >
                    <i className="bx bx-map"></i>
                    Rehman Michael & Co 277 Roundhay Rd Harehills, Leeds LS8 4HS
                  </a>
                </li>
                <li>
                  <a href="tel:+4447500287504">
                    {" "}
                    <i className="bx bx-phone-call"></i>+44 (0)113 248 5664
                  </a>
                </li>
                <li>
                  <a href="mailto:anwar@rehman-michael.com">
                    {" "}
                    <i className="bx bx-envelope"></i>
                    anwar@rehman-michael.com
                  </a>
                </li>
               
                 
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <p>
                Copyright &copy;{currentYear} All rights reserved by{" "}
                <strong>
                  {" "}
                  <a href="http://REHMAN MICHAEL (ACCOUNTANTS) LIMITED .co.uk">REHMAN MICHAEL (ACCOUNTANTS) LIMITED </a>
                </strong>
              </p>
            </div>

            <div className="col-lg-6 col-md-12">
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
    </footer>
  );
};

export default Footer;
