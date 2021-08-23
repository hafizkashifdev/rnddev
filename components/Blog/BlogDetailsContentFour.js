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
                            <br />
                            The government further added to their announcement that the National AI plan will support
                            economic growth offering more jobs by investing significantly in skills, innovation and
                            infrastructure. UK is looking up to a boost in R&D investment through government’s Research
                            and Development Roadmap, to reach 2.4 percent of GDP by 2027.
                            <br />
                            In the light of The future UK tech built, Tech Nation Report 2021 it is captivating to see
                            R&D investment target indicating that there is a good amount of private investment in
                            technology companies. The report also highlighted that tech investment in UK is third in the
                            world hitting the record high of $15bn in 2020. As a consequence of this on the other hand,
                            the investment in seed stage companies is reducing from 14% to 6% over 5 years.
                            <br />
                            It is likely to be very challenging to grow and develop grass route skills in AI and support
                            start-up and seed companies, to get early access to funding and investment – both of which
                            are necessary ingredients for the UK Government’s ambition to be met.

                        </p>
                        <div className="article-author">
                            <div className="author-profile-header"></div>
                            <div className="author-profile">
                                <div className="author-profile-title">
                                    <img src="/img/blog/amira.png" className="shadow-sm" alt="image" />
                                    <h4>Amira Nadeem</h4>
                                    <span className="d-block">Program Manager</span>
                                    <p>

                                    </p>
                                </div>
                            </div>
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