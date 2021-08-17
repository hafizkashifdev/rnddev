import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import WhyUsContent from '../components/WhyUs/WhyUsContent';

const WhatWeDo = () => {
    return (
        <>
            <Navbar />
            <PageBanner
                // pageTitle="Why Us" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Why Us" 
            />               
            <WhyUsContent />  
            <Footer />
        </>
    );
}

export default WhatWeDo;