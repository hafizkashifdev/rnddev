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

                <title>RNDTAXCLAIMS</title>
                <meta name="description" content="RNDTAXCLAIMS" />
                <meta name="og:title" property="og:title" content="RNDTAXCLAIMS"></meta>
                <meta name="twitter:card" content="RNDTAXCLAIMS"></meta>              
            </Head>

            {children}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;