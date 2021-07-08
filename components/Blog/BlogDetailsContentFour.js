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

                        <h3>How investing in AI will lead to economic growth?</h3>
                        <p>
                            The government announced in March 2021 that they have a new plan that will make UK a global
                            hub for development, commercialization and adoption. As per them the AI strategy will focus
                            on the following:
                        </p>
                        <ul className="features-list">
                            <li><i className='bx bx-badge-check'></i> Widespread use of AI technologies adding to the
                                growth of economy</li>
                            <li><i className='bx bx-badge-check'></i> Ethical, safe and trustworthy development of
                                responsible AI</li>
                            <li><i className='bx bx-badge-check'></i> Resilience in the face of change through an
                                emphasis on skills, talent and R&D</li>
                        </ul>
                        <div className="article-image text-center">
                            <img src="/img/blog/rnd-blog-4.jpg" alt="image" className="w-75" />
                        </div>
                        <p>
                            <br/>
                            The government further added to their announcement that the National AI plan will support
                            economic growth offering more jobs by investing significantly in skills, innovation and
                            infrastructure. UK is looking up to a boost in R&D investment through government’s Research
                            and Development Roadmap, to reach 2.4 percent of GDP by 2027.
                            <br/>
                            In the light of The future UK tech built, Tech Nation Report 2021 it is captivating to see
                            R&D investment target indicating that there is a good amount of private investment in
                            technology companies. The report also highlighted that tech investment in UK is third in the
                            world hitting the record high of $15bn in 2020. As a consequence of this on the other hand,
                            the investment in seed stage companies is reducing from 14% to 6% over 5 years.
                            <br/>
                            It is likely to be very challenging to grow and develop grass route skills in AI and support
                            start-up and seed companies, to get early access to funding and investment – both of which
                            are necessary ingredients for the UK Government’s ambition to be met.

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