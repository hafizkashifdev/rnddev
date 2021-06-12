import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import HowItWorksContent from '../components/HowItWorks/HowItWorksContent';

const HowItWorks = () => {
    return (
        <>
            <Navbar />
            <PageBanner
                pageTitle="How it Works" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="How it Works" 
            />               
            <HowItWorksContent />  
            <Footer />
        </>
    );
}

export default HowItWorks;