import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TermsAndConditionsContent from '../components/TermsAndConditions/TermsAndConditionsContent';
import Footer from '../components/_App/Footer';

const TermsAndConditions = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Terms and Conditions" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Terms and Conditions" 
            />

            <TermsAndConditionsContent />
            
            <Footer />
        </>
    )
}

export default TermsAndConditions;