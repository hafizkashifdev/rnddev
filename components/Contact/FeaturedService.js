import React from 'react';
import Link from 'next/link';

const FeaturedService = () => {
return (
<div className="boxes-area pb-70 mt-5">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-boxes-item">
                    <div className="icon">
                        <img src="/img/icons/address.png" alt="image" />
                    </div>
                    <h3>
                        Write To Us
                    </h3>
                    <p className="text-center" style={{ marginBottom: '45px' }}>
                        If you want to write to us please send your mail to <a style={{ color: '#25D366' }}
                            href="https://www.google.co.uk/maps/place/4+Roundwood+Ave,+Hayes,+Uxbridge+UB11+1AF,+UK/@51.5107212,-0.4437493,17z/data=!3m1!4b1!4m5!3m4!1s0x487672769cbf4edb:0x3870d88dc26cc28!8m2!3d51.5107212!4d-0.4415606"
                            target="_blank">
                            Office 77, Spaces Heathrow Airport, 4 Roundwood Avenue, Stockley Park,
                            Uxbridge, UB11 1AF United Kingdom
                        </a>
                    </p>
                    <div className="shape1">
                        <img src="/img/services/service-shape2.png" alt="image" />
                    </div>
                </div>
            </div>


            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-boxes-item">
                    <div className="icon">
                        <img src="/img/icons/chat.png" alt="image" />
                    </div>
                    <h3>
                        <a href="https://api.whatsapp.com/send?I=nl&phone=+4407500287504&text=Hi+Customer+relationship+officer+%2C+I+am+interested+in+REHMAN MICHAEL (ACCOUNTANTS) LIMITED +and+...."
                            target="_blank">
                            <a>Chat With Us</a>
                        </a>
                    </h3>
                    <p className="text-center" style={{ marginBottom: '45px' }}>
                        Want to chat with us? <br />
                        You can <a
                            href="https://api.whatsapp.com/send?I=nl&phone=+4407500287504&text=Hi+Customer+relationship+officer+%2C+I+am+interested+in+REHMAN MICHAEL (ACCOUNTANTS) LIMITED +and+...."
                            target="_blank" style={{ color: '#25D366' }}>chat with us</a> <br />
                        from Monday - Friday: <br /> 09:00 AM - 05:00 PM
                    </p>
                    <div className="shape1">
                        <img src="/img/services/service-shape2.png" alt="image" />
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-boxes-item">
                    <div className="icon">
                        <img src="/img/icons/call.png" alt="image" />
                    </div>
                    <h3>
                        <Link href="tel:+447500287504">
                        <a>Call Us</a>
                        </Link>
                    </h3>
                    <p className="text-center">
                        Want to talk to us over <br />
                        the phone about specific <br />
                        questions? You can call us at <br />
                        <a href="tel:+447500287504" style={{ color: '#25D366' }}> +44 (0)113 248 5664</a> from Monday
                        - Friday: 09:00 AM - 05:00 PM
                    </p>
                    <div className="shape1">
                        <img src="/img/services/service-shape2.png" alt="image" />
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-boxes-item">
                    <div className="icon">
                        <img src="/img/icons/instagram.png" alt="image" />
                    </div>
                    <h3>
                        <a href="https://www.instagram.com/rnd_taxclaims/" target="_blank">
                            <a>Instagram</a>
                        </a>
                    </h3>
                    <img src="/img/icons/qr-instagram.png" alt="image" className="qr-code-width" style={{
                        marginBottom: '15px' }} />
                    <div className="shape1">
                        <img src="/img/services/service-shape2.png" alt="image" />
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-boxes-item">
                    <div className="icon">
                        <img src="/img/icons/facebook.png" alt="image" />
                    </div>
                    <h3>
                        <a href="https://www.facebook.com/RnD-Tax-Claims-108095721497153" target="_blank">
                            <a>Facebook</a>
                        </a>
                    </h3>
                    <img src="/img/icons/qr-facebook.png" alt="image" className="qr-code-width" />
                    <div className="shape1">
                        <img src="/img/services/service-shape2.png" alt="image" />
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-boxes-item">
                    <div className="icon">
                        <img src="/img/icons/twitter.png" alt="image" />
                    </div>
                    <h3>
                        <a href="https://twitter.com/RnD__TaxClaims" target="_blank">
                            <a>Twitter</a>
                        </a>
                    </h3>
                    <img src="/img/icons/qr-twitter.png" alt="image" className="qr-code-width" />
                    <div className="shape1">
                        <img src="/img/services/service-shape2.png" alt="image" />
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-boxes-item">
                    <div className="icon">
                        <img src="/img/icons/whatsapp.png" alt="image" />
                    </div>
                    <h3>
                        <a href="https://api.whatsapp.com/send?I=nl&phone=+4407500287504&text=Hi+Customer+relationship+officer+%2C+I+am+interested+in+REHMAN MICHAEL (ACCOUNTANTS) LIMITED +and+...."
                            target="_blank">
                            <a>WhatsApp</a>
                        </a>
                    </h3>
                    {/* <p>Scan to chat with our virtual agent 24/7 or with a live agent during business hours.</p> */}
                    <img src="/img/icons/mobile.png" alt="image" className="qr-code-width" />
                    <div className="shape1">
                        <img src="/img/services/service-shape2.png" alt="image" />
                    </div>
                </div>
            </div>





            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-boxes-item">
                    <div className="icon">
                        <img src="/img/icons/youtube.png" alt="image" />
                    </div>
                    <h3>
                        <a href="https://www.youtube.com/channel/UCpN6gJW506u7K0xCs6_kDtg" target="_blank">
                            <a>Youtube</a>
                        </a>
                    </h3>
                    <img src="/img/icons/qr-youtube.png" alt="image" className="qr-code-width" />
                    <div className="shape1">
                        <img src="/img/services/service-shape2.png" alt="image" />
                    </div>
                </div>
            </div>




            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-boxes-item">
                    <div className="icon">
                        <img src="/img/icons/linkedin.png" alt="image" />
                    </div>
                    <h3>
                        <a href="https://www.linkedin.com/company/rnd-tax-claims/" target="_blank">
                            <a>LinkedIn</a>
                        </a>
                    </h3>
                    <img src="/img/icons/qr-linkedin.png" alt="image" className="qr-code-width" />
                    <div className="shape1">
                        <img src="/img/services/service-shape2.png" alt="image" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
)
}

export default FeaturedService;