import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CookiePolicyContent from '../components/CookiePolicy/CookiePolicy';
import Footer from '../components/_App/Footer';

const CookiePolicy = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Cookie Policy" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Cookie Policy" 
            />

            <CookiePolicyContent />
            
            <Footer />
        </>
    )
}

export default CookiePolicy;