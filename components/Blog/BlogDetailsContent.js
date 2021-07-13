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
                        <h3>Research & Development – Tax Credits</h3>
                        <p>
                            <b>Understanding Tax Credits</b> <br />
                            Companies that innovate in the area of science and technology receive rewards as an
                            incentive in the form of R&D Tax Credits. The HMRC introduced this incentive-based system to
                            provide funds to companies that are developing innovative products or altering existing ones
                            to create a better one. This tax relief program can give you a great opportunity to claim a
                            good portion of your R&D expenditure as tax credits helping you reduce your tax bill. To be
                            eligible for this scheme, you need to work in the area of research and development that adds
                            value to the society irrespective of the sector you innovate in.

                        </p>
                        <p>
                            <b>Eligibility for R&D Tax Credits</b> <br />
                            Research & Development helps your business to grow giving a competitive edge through
                            innovation. Most companies struggle for their survival depending on acquisitions and mergers
                            to innovate. However, with R&D tax credit initiative, many businesses have been empowered
                            due to sufficient funding supporting their innovation.
                            <br />
                            To be eligible for R&D Tax Relief, you need to meet the criteria: (1) UK based limited
                            company subject to corporation tax (2) carried out research and development activities (3)
                            expenditure on R&D projects
                        </p>
                        <div className="article-image text-center">
                            <img src="/img/blog/rnd-blog-1.jpg" alt="image" className="w-75" />
                        </div>
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
                                <p className="comment-form-comment">
                                    <label>Comment</label>
                                    <textarea name="comment" id="comment" cols="45" placeholder="Your Comment..."
                                        rows="5" required="required"></textarea>
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