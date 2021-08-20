import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/_App/Footer';
import FeaturedService from '../components/Contact/FeaturedService';

const Contact = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                // pageTitle="Contact us" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Contact us" 
            />
            <FeaturedService/>
            <ContactForm />   
            <Footer />
        </>
    );
}

export default Contact;