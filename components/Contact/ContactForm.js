// import React, {useState} from 'react';
// import axios from "axios";
// import CountryInfo from "./CountryCode";
// import { phoneNumber_info } from '../../constants/constant';
// import ErrorInfo from "./ErrorInfo";
// import SuccessInfo from "./SuccessInfo";
// import Link from "next/link";
// import { useFormik } from 'formik';
// import { mondayCUSLambdaurl, airtableCUsLambdaurl, twillioLambdaurl, emailhtml, emailtitle, contactUstable, AirTableBase, ContactBoardId} from "../../constants/constant";
// const ContactForm = () => {
//     const [response, setresponse]= useState('')

//      const registerUser = async event => {
//          event.preventDefault()
//          const countryCode = phoneNumber_info.country.iso2.toUpperCase();
//          const phoneNumber = event.target.phoneNumber.value;
//          axios.all([
//              axios.post(`${ mondayCUSLambdaurl }/C-US-SaleSiteRoute-monday`, {
//                  Title: event.target.title.value,
//                  name: event.target.name.value,
//                  //LastName: event.target.lastname.value,
//                  Company: event.target.company.value,
//                  CompanyDesignation: event.target.companydesignation.value,
//                  Phone: phoneNumber,
//                  PhoneShortCode: countryCode,
//                  Email: event.target.email.value,
//                  Comments: event.target.query.value,
//                  board: ContactBoardId
//              }),
//              axios.post(`${ airtableCUsLambdaurl }/airtableContactUs`, {
//                  Title: event.target.title.value,
//                  name: event.target.name.value,
//                  //LastName: event.target.lastname.value,
//                  Company: event.target.company.value,
//                  CompanyDesignation: event.target.companydesignation.value,
//                  Phone: countryCode + "" + phoneNumber,
//                  Email: event.target.email.value,
//                  Comments: event.target.query.value,
//                  base: AirTableBase,
//                  table: contactUstable,
//                  type:"RND"
//              }),
//              axios.post(`${ twillioLambdaurl }/twillioEmailLambda`, {
//                  to: event.target.email.value,
//                  from: "anwar@rehman-michael.com",
//                  subject: emailtitle('RnD Tax Claims'),
//                  text: emailtitle('RnD Tax Claims'),
//                  html: emailhtml(event.target.title.value, event.target.name.value, event.target.lastname.value, 'RnD Tax Claims')
//              })
//          ]).then(([MonRes, AirRes, TwilioRes]) => {
//              setresponse('sucess')
//                 event.target.reset();
//                      }).catch(err => {
//              setresponse('error')
//          })
//      }
   
//     return (
        
//         <section className="contact-area pb-100 pt-3">
//             <div className="container">
//                 <div className="section-title">
//                     <span className="sub-title">
//                         <img src="/img/star-icon.png" alt="image" />
//                         Get in Touch
//                     </span>
//                    {/*  <h2>Ready to Get Started?</h2> */}
//                     <p>Your email address will not be published. Required fields are marked *</p>
//                 </div>
//                 {
//                     response === 'sucess' ? ( < SuccessInfo / > ) : ( '')
//                 }
//                 {
//                     response === 'error' ? ( < ErrorInfo / > ):('')
//                 }
                

//                 <div className="row align-items-center">
//                     <div className="col-lg-6 col-md-12">
//                         <div className="contact-image">
//                             <img src="/img/contact.png" alt="image" />
//                         </div>
//                     </div>

//                     <div className="col-lg-6 col-md-12">
                    
//                         <div className="contact-form">
//                         <form id="contactForm" onSubmit={registerUser} > 
//                                 <div className="row">
//                                     <div className="col-lg-12 col-md-6">
//                                         <div className="form-group">
//                                             <select name="title" className="form-control" id="title"
//                                             required>
//                                             <style jsx>{`
        
//         select:invalid { color:grey; }

//     `}</style>
//                                                 <option value="">Select your Title *</option>
//                                                 <option value="Ms.">Ms.</option>
//                                                 <option value="Mr.">Mr.</option>
//                                                 <option value="Miss.">Miss</option>
//                                                 <option value="Mrs.">Mrs.</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12 col-md-6">
//                                         <div className="form-group">
//                                             <input type="text" name="name" className="form-control" id="name" 
//                                             placeholder="First Name *" required maxLength="100" 
//                                              pattern="^[a-zA-Z ]+$"
//                                              title="First Name is invalid. Only alphabets are allowed."/>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12 col-md-6">
//                                         <div className="form-group">
//                                             <input type="text" name="lastname" className="form-control" id="lastname"
//                                             placeholder="Last Name *" required maxLength="100" 
//                                              pattern="^[a-zA-Z ]+$"
//                                              title="Last Name is invalid. Only alphabets are allowed."/>
//                                         </div>
//                                     </div>

//                                     <div className="col-lg-12 col-md-6">
//                                         <div className="form-group">
//                                             <input type="email" name="email" className="form-control" id="email"
//                                             placeholder="Email *" required maxLength="400"
//                                             pattern="^(?!.*?\.\.)[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
//                                             title="Email-id is invalid"/>
//                                         </div>
//                                     </div>


//                                     <div className="input-group col-lg-12 col-md-12 form-group">
//                                         <CountryInfo />
//                                         <span className="input-group-addon">&nbsp;&nbsp;</span>
//                                         <input type="tel" name="phoneNumber" className="form-control" id="phoneNumber"
//                                         placeholder="Phone *" required
//                                             pattern="[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}"
//                                             title="Phone Number is invalid" />
//                                     </div>

//                                     <div className="col-lg-12 col-md-12">
//                                         <div className="form-group">
//                                             <input type="text" name="company" className="form-control" id="company"
//                                             placeholder="Organization" maxLength="100" />
//                                         </div>
//                                     </div>

//                                     <div className="col-lg-12 col-md-12">
//                                         <div className="form-group">
//                                             <input type="text" name="companydesignation" className="form-control" id="companydesignation"
//                                             placeholder="Role/Designation" maxLength="100" />
//                                         </div>
//                                     </div>

//                                     <div className="col-lg-12 col-md-12">
//                                         <div className="form-group">
//                                             <textarea name="query" id="query" className="form-control" cols="30" rows="6"
//                                             placeholder="Write your query... *" required maxLength="2000"></textarea>
//                                         </div>
//                                     </div>
//                                      <div className="col-lg-12 col-md-12">
//                                         <div className="form-group">
//                                             <label>By submitting the form you accept <Link href='/terms-and-conditions/'><a>Terms & Conditions</a></Link> and <Link href='/privacy-policy/'><a>Privacy Policy</a></Link></label>
//                                         </div>
//                                     </div>

//                                     <div className="col-lg-12 col-md-12">
//                                         <button type="submit" className="default-btn">
//                                             <i className="flaticon-tick"></i>
//                                             Send query <span></span>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
               
//                 </div>
//                 {
//                     response === 'sucess' ? ( < SuccessInfo / > ) : ( '')
//                 }
//                 {
//                     response === 'error' ? ( < ErrorInfo / > ):('')
//                 }
//             </div>
//         </section>
        
//     )
// }

// export default ContactForm;