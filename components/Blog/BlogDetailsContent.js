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
                        <div className="text-center">
                            <img src="/img/blog/rnd-blog-1.png" alt="image"  />
                        </div>

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