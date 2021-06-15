import React, {useState} from 'react';
import axios from "axios";
import CountryInfo from "./CountryCode";
import ErrorInfo from "./ErrorInfo";
import SuccessInfo from "./SuccessInfo";
import { mondaymicrourl, airtablemicrourl , twilliotablemicrourl, emailhtml, emailtitle, contactUstable, AirTableBase, ContactBoardId} from "../../constants/constant";
const ContactForm = () => {
    const [response, setresponse]= useState('')
     const registerUser = async event => {
         event.preventDefault()
         axios.all([
             axios.post(`${ mondaymicrourl }/contact/savecontact`, {
                 Title: event.target.title.value,
                 FirstName: event.target.firstname.value,
                 LastName: event.target.lastname.value,
                 Company: event.target.company.value,
                 CompanyDesignation: event.target.companydesignation.value,
                 Phone: event.target.phone_number.value,
                 PhoneShortCode: event.target.phone_country.value,
                 Email: event.target.email.value,
                 Comments: event.target.message.value,
                 board: ContactBoardId
             }),
             axios.post(`${ airtablemicrourl }/contact/savecontact`, {
                 Title: event.target.title.value,
                 FirstName: event.target.firstname.value,
                 LastName: event.target.lastname.value,
                 Company: event.target.company.value,
                 CompanyDesignation: event.target.companydesignation.value,
                 Phone: event.target.phone_country.value + "" + event.target.phone_number.value,
                 Email: event.target.email.value,
                 Comments: event.target.message.value,
                 base: AirTableBase,
                 table: contactUstable
             }),
             axios.post(`${twilliotablemicrourl}/mail/sendemail`, {
                 to: event.target.email.value,
                 from: "No-reply@rndtaxclaims.co.uk",
                 subject: emailtitle('Project R&D'),
                 text: emailtitle('Project R&D'),
                 html: emailhtml(event.target.title.value, event.target.firstname.value, event.target.lastname.value, 'Project R&D')
             })
         ]).then(([MonRes, AirRes, TwilioRes]) => {
             setresponse('Thank you for contacting us.')
                event.target.title.value='';
                event.target.firstname.value = '';
                event.target.lastname.value = '';
                event.target.company.value = '';
                event.target.companydesignation.value = '';
                event.target.phone_number.value = '';
                event.target.phone_country.value = '';
                event.target.email.value = '';
                event.target.message.value='';
                     }).catch(err => {
             setresponse('Some Thing went Wrong')
         })
     }
    return (
        
        <section className="contact-area pb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" />
                        Get in Touch
                    </span>
                   {/*  <h2>Ready to Get Started?</h2> */}
                    <p>Your email address will not be published. Required fields are marked *</p>
                </div>

                {/* <SuccessInfo />
                <ErrorInfo /> */}

                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-image">
                            <img src="/img/contact.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                    
                        <div className="contact-form">
                        <label>{response}</label>
                            <form id="contactForm" onSubmit={registerUser}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <select name="title" className="form-control" id="title" required>
                                                <option value="">Select your Title *</option>
                                                <option value="Ms.">Ms.</option>
                                                <option value="Mr.">Mr.</option>
                                                <option value="Miss.">Miss</option>
                                                <option value="Mrs.">Mrs.</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="firstname" className="form-control" id="firstname" placeholder="First Name *" required pattern="[A-Za-z0-9()_.'-]+" maxLength="100" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="lastname" className="form-control" id="lastname" placeholder="Last Name *" required pattern="[A-Za-z0-9()_.'-]+" maxLength="100" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" id="email" placeholder="Email *" required maxLength="400" />
                                        </div>
                                    </div>


                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <CountryInfo/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <span>

                                                <input type="tel" name="phone_number" className="form-control" id="phone_number" placeholder="Phone *" required />
                                            </span>
                                        </div>
                                    </div>


                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="company" className="form-control" id="company" placeholder="Company" maxLength="100" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="companydesignation" className="form-control" id="companydesignation" placeholder="Company Designation" maxLength="100" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" id="message" className="form-control" cols="30" rows="6" placeholder="Write your message... *" required maxLength="2000"></textarea>
                                        </div>
                                    </div>


                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">
                                            <i className="flaticon-tick"></i>
                                            Send Message <span></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default ContactForm;