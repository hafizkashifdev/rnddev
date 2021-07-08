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

                        <h3>Limitations of Automated R&D Tax Credit Solutions</h3>

                        <p>
                            Many companies have been trying for decades to develop a software solution that could
                            capture a company’s R&D tax credits completely but there are limitations that doesn’t allow
                            them to accurately record all information. The main reason behind this failure is because
                            the nature of R&D tax credit rules is interpretive and they are guided by 4-Part Test for
                            R&D qualification. The systematic logics cannot fully capture the requirements of R&D which
                            is why the automated solutions work only for a few.
                            <br />
                            The solutions that claim to be automated are not fully automated and this is the major flaw
                            that leads to systematic failure. The basic requirement of these systems is to add
                            individuals within organisations who have no experience of tax, let alone the experience
                            with R&D tax credit, to determine qualifying expenditure. It leads to reduction in credits
                            and puts additional burden on employees who don’t have the experience of tax. This impact is
                            largely seen in areas where different types of Qualified Research Expenditure needs to be
                            identified.
                        </p>
                        <div className="article-image text-center">
                            <img src="/img/blog/rnd-blog-5.jpg" alt="image" className="w-75" />
                        </div>
                        <h3>Things You Need to Know About Automated R&D Tax Credit Software</h3>
                        <p>
                            Below are the points that you need to know about automated R&D tax credit software:
                        </p>

                        <ul className="features-list">
                            <li>
                                <i className='bx bx-badge-check'></i> Understanding Tax Credits and how to reflect time
                                and cost within the software is key to
                                the success of R&D project.
                            </li>
                            <li>
                                <i className='bx bx-badge-check'></i> Non-Compliance helps in identifying R&D activities
                                and costs. Time tracking is subjective
                                and often leads to understatement.
                            </li>
                            <li>
                                <i className='bx bx-badge-check'></i> Security is important as any automated R&D tax
                                credit software would have to breach
                                firewalls for any analysis.
                            </li>
                            <li>
                                <i className='bx bx-badge-check'></i> Calculation of federal and state credits is not
                                included in the software as it only
                                captures Qualified Research Activities (QRAs) leaving the QREs outside the system.
                            </li>
                            <li>
                                <i className='bx bx-badge-check'></i> Support QREs as automated systems will not include
                                staff working on the project and they
                                need to be considered outside the system.
                            </li>
                            <li>
                                <i className='bx bx-badge-check'></i> Code Variances as some software systems have
                                algorithms that are designed to identify and
                                determine qualifying expenditure.
                            </li>
                            <li>
                                <i className='bx bx-badge-check'></i> Audit process is important to defend the project
                            </li>
                        </ul>

                        <h3>Setting the mood with incense</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem.</p>

                        <h3>The rise of marketing and why you need it</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
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