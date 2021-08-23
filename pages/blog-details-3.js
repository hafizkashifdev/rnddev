import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContentThree';
import Footer from '../components/_App/Footer';

const BlogDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Preventing abuse of R&D tax relief for SMEs" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Details" 
            /> 

            <BlogDetailsContent />
            
            <Footer />
        </>
    )
}

export default BlogDetails;