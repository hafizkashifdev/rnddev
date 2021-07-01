import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import LearnContent from '../components/Learn/LearnContent';

const HowItWorks = () => {
    return (
        <>
            <Navbar />
            <PageBanner
                pageTitle="Learn" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Learn" 
            />               
            <LearnContent />  
            <Footer />
        </>
    );
}

export default HowItWorks;