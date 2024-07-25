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

                <title>REHMAN MICHAEL (ACCOUNTANTS) LIMITED </title>
                <meta name="description" content="REHMAN MICHAEL (ACCOUNTANTS) LIMITED " />
                <meta name="og:title" property="og:title" content="REHMAN MICHAEL (ACCOUNTANTS) LIMITED "></meta>
                <meta name="twitter:card" content="REHMAN MICHAEL (ACCOUNTANTS) LIMITED "></meta>              
            </Head>

            {children}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;