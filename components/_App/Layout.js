import React from 'react';
import Head from "next/head";
import GoTop from './GoTop';

// Layout

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>RNDKONECT</title>
                <meta name="description" content="RNDKONECT" />
                <meta name="og:title" property="og:title" content="RNDKONECT"></meta>
                <meta name="twitter:card" content="RNDKONECT"></meta>
                <link rel="canonical" href="https://tarn-react.envytheme.com/"></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Head>

            {children}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;