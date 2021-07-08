import React from 'react';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';

const BlogDetailsContent = () => {
return (
<section className="blog-details-area ptb-20">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="blog-details-desc">
                    <div className="article-content">

                        <h3>Preventing abuse of R&D tax relief for SMEs</h3>
                        <p>
                            Consultation is going on by the government to introduce a cap on the payable tax relief for
                            SMEs. This proposal will limit the R&D tax relief with the introduction of anti-abuse cap to
                            the payable tax on R&D projects. The main objective of this consultation is to discourage
                            abusive tax relief claims without negatively impacting genuine R&D projects.
                            <br/><br/>
                            The consultation acknowledges that R&D tax relief scheme encourages investment in business
                            and is a fundamental part of the innovation program initiated by the government. The SME
                            scheme is liberal in giving corporation tax deduction or payable tax credit for businesses
                            running in loss. The payable tax credit offers substantial support to companies running in
                            loss by giving them the flexibility to claim payment for their loss of R&D expense up to
                            14.5%.
                        </p>
                        <div className="article-image text-center">
                            <img src="/img/blog/rnd-blog-3.jpg" alt="image" className="w-75" />
                        </div>
                        <p>
                            <br/>
                            As the tax credit makes cash payment to the R&D project from HMRC, the concern is increasing
                            that tax credit has become a target for abuse. The government wants to regulate this abuse
                            with the introduction of this cap which will be based on the company’s overall Pay As You
                            Earn (PAYE) and National Insurance Contributions (NICs) liability during the accounting
                            period the claim is for.
                            <br/><br/>
                            This has been imposed on all R&D tax relief claims from April 2020. In order to make sure
                            there is no negative impact on genuine R&D projects, the government is committed to consult
                            before releasing the funds.
                        </p>
                    </div>

                    <div className="comments-area">
                        <h3 className="comments-title">2 Comments:</h3>

                        <ol className="comment-list">
                            <li className="comment">
                                <div className="comment-body">
                                    <div className="comment-meta">
                                        <div className="comment-author vcard">
                                            <img src="/img/user1.jpg" className="avatar" alt="image" />
                                            <b className="fn">John Jones</b>
                                            <span className="says">says:</span>
                                        </div>

                                        <div className="comment-metadata">
                                            <span>April 24, 2019 at 10:59 am</span>
                                        </div>
                                    </div>

                                    <div className="comment-content">
                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a
                                            type specimen.</p>
                                    </div>

                                    <div className="reply">
                                        <Link href="#">
                                        <a className="comment-reply-link">Reply</a>
                                        </Link>
                                    </div>
                                </div>

                                <ol className="children">
                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src="/img/user2.jpg" className="avatar" alt="image" />
                                                    <b className="fn">Steven Smith</b>
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    <a href="#">
                                                        <span>April 24, 2019 at 10:59 am</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since
                                                    the 1500s, when an unknown printer took a galley of type and
                                                    scrambled it to make a type specimen.</p>
                                            </div>

                                            <div className="reply">
                                                <a href="#" className="comment-reply-link">Reply</a>
                                            </div>
                                        </div>

                                        <ol className="children">
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src="/img/user3.jpg" className="avatar" alt="image" />
                                                            <b className="fn">Sarah Taylor</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <a href="#">
                                                                <span>April 24, 2019 at 10:59 am</span>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever
                                                            since the 1500s, when an unknown printer took a galley of
                                                            type and scrambled it to make a type specimen.</p>
                                                    </div>

                                                    <div className="reply">
                                                        <Link href="#">
                                                        <a className="comment-reply-link">Reply</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>

                            <li className="comment">
                                <div className="comment-body">
                                    <div className="comment-meta">
                                        <div className="comment-author vcard">
                                            <img src="/img/user4.jpg" className="avatar" alt="image" />
                                            <b className="fn">John Doe</b>
                                            <span className="says">says:</span>
                                        </div>

                                        <div className="comment-metadata">
                                            <a href="#">
                                                <span>April 24, 2019 at 10:59 am</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="comment-content">
                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a
                                            type specimen.</p>
                                    </div>

                                    <div className="reply">
                                        <Link href="#">
                                        <a className="comment-reply-link">Reply</a>
                                        </Link>
                                    </div>
                                </div>

                                <ol className="children">
                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src="/img/user1.jpg" className="avatar" alt="image" />
                                                    <b className="fn">James Anderson</b>
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    <a href="#">
                                                        <span>April 24, 2019 at 10:59 am</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since
                                                    the 1500s, when an unknown printer took a galley of type and
                                                    scrambled it to make a type specimen.</p>
                                            </div>

                                            <div className="reply">
                                                <Link href="#">
                                                <a className="comment-reply-link">Reply</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </li>
                        </ol>

                        <div className="comment-respond">
                            <h3 className="comment-reply-title">Leave a Reply</h3>

                            <form className="comment-form">
                                <p className="comment-notes">
                                    <span id="email-notes">Your email address will not be published.</span>
                                    Required fields are marked
                                    <span className="required">*</span>
                                </p>
                                <p className="comment-form-author">
                                    <label>Name <span className="required">*</span></label>
                                    <input type="text" id="author" placeholder="Your Name*" name="author"
                                        required="required" />
                                </p>
                                <p className="comment-form-email">
                                    <label>Email <span className="required">*</span></label>
                                    <input type="email" id="email" placeholder="Your Email*" name="email"
                                        required="required" />
                                </p>
                                <p className="comment-form-url">
                                    <label>Website</label>
                                    <input type="url" id="url" placeholder="Website" name="url" />
                                </p>
                                <p className="comment-form-comment">
                                    <label>Comment</label>
                                    <textarea name="comment" id="comment" cols="45" placeholder="Your Comment..."
                                        rows="5" required="required"></textarea>
                                </p>
                                <p className="comment-form-cookies-consent">
                                    <input type="checkbox" value="yes" name="comment-cookies-consent"
                                        id="comment-cookies-consent" />
                                    <label>Save my name, email, and website in this browser for the next time I
                                        comment.</label>
                                </p>
                                <p className="form-submit">
                                    <input type="submit" name="submit" id="submit" className="submit"
                                        value="Post A Comment" />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
)
}

export default BlogDetailsContent;