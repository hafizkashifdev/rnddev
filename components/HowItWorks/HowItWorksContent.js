import React from 'react';


const HowItWorksContent = () => {
return (
<section className="privacy-policy-area">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="privacy-policy-content">
                    <h3>
                        We are designed to provide our Clients with data accuracy, so they can make informed decisions. 
                        By following simple steps you can make your Tax process so much easier and efficient.
                    </h3>
                    
                    <p>
                        <ul>
                            <li>Registration</li>
                            <li>Validation</li>
                            <li>Eligibility Questionnaire</li>
                            <li>Summary Report</li>
                            <li>Detailed questionnaire</li>
                            <li>Claim computation</li>
                            <li>Seek Expert Advice</li>
                            <li>Generate Detailed Report</li>
                            <li>Submits the claims to HMRC</li>
                        </ul>
                    </p>
                    <div class="width-60-center">
                        <img src="/img/how-its-work.png" alt="" />
                    </div>
                    
                    <h3>Submit the claims to HMRC</h3>
                    <div class="width-60-center">
                        <img src="/img/How-it-works-two.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)
}

export default HowItWorksContent;