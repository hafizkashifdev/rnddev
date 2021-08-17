import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
import Footer from '../components/_App/Footer';
 
const AboutUs = () => {
    return (
        <>
            <Navbar />
            <PageBanner
                // pageTitle="About Us" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="About Us" 
            />
            <AboutUsContent />          
            <Footer />
        </>
    );
}

export default AboutUs;