import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
 
const RegisterYourInterests = () => {
    return (
        <>
            <Navbar />
            <PageBanner
                pageTitle="Register Your Interests" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Register Your Interests" 
            />                 
            <Footer />
        </>
    );
}

export default RegisterYourInterests;