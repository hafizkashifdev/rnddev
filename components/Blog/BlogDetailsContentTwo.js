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

                        <h3>Identify your R&D expense</h3>

                        <p>
                            What counts as R&D confuses most of the project owners due to which they could not claim
                            maximum tax relief. Knowing the in and out of these expenses can give your claim the boost
                            it needs.
                            <br/><br/>
                            The first thing you need to understand is what counts as R&D expense and what does not
                            count. Tax relief can be claimed on your operational costs but it can not be claimed on
                            fixed assets.
                            <br/><br/>
                            We will help you identify R&D expense for your project. Some of the key areas you need to
                            focus on are as follows:
                        </p>

                        <h3>Four major elements that we offer:</h3>

                        <ul className="features-list">
                            <li>
                                <i className='bx bx-badge-check'></i> Direct Staff Costs that you bear during the
                                project for the permanent employees working on
                                the project. For example, the gross salaries of your employees will be calculated to
                                claim tax relief
                            </li>
                            <li>
                                <i className='bx bx-badge-check'></i> Software Costs which helped in the execution of
                                R&D activities
                            </li>
                            <li>
                                <i className='bx bx-badge-check'></i> Consumables that are utilized in the project. For
                                example, fuel and power can be included
                                in your claim for tax relief
                            </li>
                            <li>
                                <i className='bx bx-badge-check'></i> Subcontracted Costs can be included in your claim
                                to cover external services cost
                            </li>
                            <li>
                                <i className='bx bx-badge-check'></i> Volunteers specifically in case of medical centers
                                is applicable if any cost is paid to
                                them for their services
                            </li>
                        </ul>
                        <div className="article-image text-center">
                            <img src="/img/blog/rnd-blog-2.jpg" alt="image" className="w-75" />
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