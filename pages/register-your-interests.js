import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import RegisterYourInterestsForm  from '../components/RegisterYourInterests/RegisterYourInterestsForm';
const RegisterYourInterests = () => {
    return (
        <>
            <Navbar />
            <PageBanner
                // pageTitle="Register Your Interests" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Register Your Interests" 
            />  
            
            <RegisterYourInterestsForm />             
            <Footer />
        </>
    );
}

export default RegisterYourInterests;