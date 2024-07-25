import React, { useState } from "react";
import { API_BASE_URL, API_KEY } from "../../constants/constant";
import Link from "next/link";

const RegisterYourInterestsForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" }); // For displaying success or error messages

  const postUser = async (data) => {
    try {
      const response = await fetch(`${API_BASE_URL}enquiries`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok && responseData.statusCode === 201) {
        setMessage({
          text: "Registration successful! Thank you for reaching out. A member of our team will get back to you shortly.",
          type: "success",
        });
      } else {
        setMessage({
          text: responseData.message || "An error occurred",
          type: "error",
        });
      }
    } catch (error) {
      setMessage({
        text: "An error occurred",
        type: "error",
      });
    } finally {
      setLoading(false);
      resetForm(); // Reset the form after submission
    }
  };

  const resetForm = () => {
    document.getElementById("contactForm").reset();
    setMessage({ text: "", type: "" }); // Clear message after form reset
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    if (form.checkValidity()) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
      setLoading(true);
      postUser(data);
    } else {
      form.reportValidity();
    }
  };

  const alertStyles = {
    padding: "15px",
    borderRadius: "4px",
    fontSize: "16px",
    marginTop: "20px",
    color: "#fff",
  };

  const successStyles = {
    ...alertStyles,
    backgroundColor: "#d4edda",
    color: "#155724",
    border: "1px solid green",
  };

  const errorStyles = {
    ...alertStyles,
    backgroundColor: "#f8d7da",
    color: "#721c24",
    border: "1px solid #f5c6cb",
  };

  return (
    <section className="contact-area pb-100 pt-3">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src="/img/star-icon.png" alt="image" />
            Get in Touch
          </span>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="contact-image">
              <img src="/img/contact.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="contact-form">
              <form id="contactForm" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Name *"
                        required
                        maxLength="100"
                        pattern="^[a-zA-Z ]+$"
                        title="Name is invalid. Only alphabets are allowed."
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email *"
                        required
                        maxLength="400"
                        pattern="^(?!.*?\\..*)[\\w]{1,}[\\w.+-]{0,}@[\\w-]{2,}([.][a-zA-Z]{2,}|[.][\\w-]{2,}[.][a-zA-Z]{2,})$"
                        title="Email-id is invalid"
                      />
                    </div>
                  </div>
                  <div className="input-group col-lg-12 col-md-12 form-group">
                    <span className="input-group-addon">&nbsp;&nbsp;</span>
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Phone *"
                      required
                      pattern="^(\+44\s?7\d{3}|\(?\d{2,5}\)?\s?\d{5,})$"
                      title="Phone Number must be a UK number starting with +44"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="query"
                        id="query"
                        className="form-control"
                        cols="30"
                        rows="6"
                        placeholder="Write your query..."
                        maxLength="2000"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        By submitting the form you accept{" "}
                        <Link href="/terms-and-conditions/">
                          <a>Terms & Conditions</a>
                        </Link>{" "}
                        and{" "}
                      </label>
                      <Link href="/privacy-policy/">
                        <a>Privacy Policy</a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button
                      type="submit"
                      className="default-btn"
                      disabled={loading}
                    >
                      {loading ? (
                        "Submitting..."
                      ) : (
                        <>
                          <i className="flaticon-tick"></i> Register Interest{" "}
                          <span></span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
              {message.text && (
                <div
                  style={
                    message.type === "success" ? successStyles : errorStyles
                  }
                >
                  {message.text}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterYourInterestsForm;
