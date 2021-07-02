import React from 'react';
import Sidebar from './Sidebar';

const CookiePolicyContent = () => {
return (
<section className="terms-of-service-area ptb-20">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-12">
                <div className="terms-of-service-content">
                    <img src="/img/cookie-policy.png" alt="image" />
                    <h1>Cookie Policy</h1>
                    <h3>1. Introduction</h3>
                    <p>1.1 Our website uses cookies.</p>
                    <p>1.2 By using our website and agreeing to this policy, you consent to our
                        use of cookies in accordance with the terms of this policy.</p>
                    <h3>2. About cookies</h3>
                    <p>2.1 A cookie is a file containing an identifier (a string of letters and
                        numbers) that is sent by a web server to a web browser and is stored by the browser. The
                        identifier is then sent back to the server each time the browser requests a page from the
                        server.</p>
                    <p>2.2 Cookies may be either persistent cookies or
                        session cookies: a persistent cookie will be stored by a web browser and will
                        remain valid until its set expiry date, unless deleted by the user before the expiry date; a
                        session cookie, on the other hand, will expire at the end of the user session, when the web
                        browser is closed.</p>
                    <p>2.3 Cookies do not typically contain any information that personally
                        identifies a user, but personal information that we store about you may be linked to the
                        information stored in and obtained from cookies.</p>
                    <p>2.4 Cookies can be used by web servers to identity and track users as
                        they navigate different pages on a website and identify users returning to a website.</p>
                    <h3>3. Our cookies</h3>
                    <p>3.1 We use both session and persistent cookies on our website.</p>
                    <p>3.2 The names of the cookies that we use on our website, and the purposes
                        for which they are used, are set out below:</p>
                    <h3>4. Analytics cookies</h3>
                    <p>4.1 We use Google Analytics to analyse the use of our website.</p>
                    <p>4.2 Our analytics service provider generates statistical and other
                        information about website use by means of cookies.</p>
                    <p>4.3 The analytics cookies used by our website have the following names:
                        _utma, _utmb, _utmc and _utmz</p>
                    <p>4.4 The information generated relating to our website is used to create
                        reports about the use of our website.</p>
                    <h3>5. Third party cookies</h3>
                    <p>5.1 Our website also uses third party cookies.</p>
                    <p>5.2 We use Google AdWords remarketing campaigns to target our ads to you
                        based on your prior use of the site.&nbsp; Ads will be displayed when you visit other sites
                        across the Google Display Network. You can opt out of Google&rsquo;s use of cookies, by visiting
                        Google&rsquo;s Ads Settings at&nbsp;<strong><a
                                href="https://www.google.com/settings/u/0/ads/authenticated">https://www.google.com/settings/u/0/ads/authenticated</a></strong>
                    </p>
                    <h3>6. Blocking cookies</h3>
                    <p>6.1 Most browsers allow you to refuse to accept cookies; for example:</p>
                    <p>(a) in Internet Explorer (version 10) you can block cookies using the
                        cookie handling override settings available by clicking Tools, Internet
                        Options, Privacy and then Advanced;</p>
                    <p>(b) in Firefox (version 24) you can block all cookies by clicking
                        Tools, Options, Privacy, selecting Use custom
                        settings for history from the drop-down menu, and unticking Accept cookies from
                        sites; and</p>
                    <p>(c) in Chrome (version 29), you can block all cookies by accessing the
                        Customise and control menu, and clicking Settings, Show
                        advanced settings and Content settings, and then selecting Block
                        sites from setting any data under the Cookies heading.</p>
                    <p>6.2 Blocking all cookies will have a negative impact upon the usability
                        of many websites.</p>
                    <p>6.3 If you block cookies, you may not be able to use all the features on
                        our website.</p>
                    <h3>7. Deleting cookies</h3>
                    <p>7.1 You can delete cookies already stored on your computer; for example:
                    </p>
                    <p>(a) in Internet Explorer (version 10), you must manually delete cookie
                        files (you can find instructions for doing so at http://support.microsoft.com/kb/278835);</p>
                    <p>(b) in Firefox (version 24), you can delete cookies by clicking
                        Tools, Options and Privacy, then selecting Use
                        custom settings for history, clicking Show Cookies, and then clicking
                        Remove All Cookies; and</p>
                    <p>(c) in Chrome (version 29), you can delete all cookies by accessing the
                        Customise and control menu, and clicking Settings, Show
                        advanced settings and Clear browsing data, and then selecting Delete
                        cookies and other site and plug-in data before clicking Clear browsing
                        data.</p>
                    <p>7.2 Deleting cookies will have a negative impact on the usability of many
                        websites.</p>
                    <h3>8. Our details</h3>
                    <p>8.1 This website is owned and operated by RnD Tax Claims.</p>
                    <p>8.2 We are registered in England and Wales under registration number 13445423.</p>
                </div>
            </div>

            <div className="col-lg-4 col-md-12">
                <Sidebar />
            </div>
        </div>
    </div>
</section>
)
}

export default CookiePolicyContent;