import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
 
const WhatWeDo = () => {
    return (
        <>
            <Navbar />
            <PageBanner
                pageTitle="What We Do" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="What We Do" 
            />                 
            <Footer />
        </>
    );
}

export default WhatWeDo;