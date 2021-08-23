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
                            <br /><br />
                            The first thing you need to understand is what counts as R&D expense and what does not
                            count. Tax relief can be claimed on your operational costs but it can not be claimed on
                            fixed assets.
                            <br /><br />
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
                        <div className="text-center img-50-center">
                            <img src="/img/blog/rnd-blog-2.jpg" alt="image" />
                        </div>

                        <div className="article-author">
                            <div className="author-profile-header"></div>
                            <div className="author-profile">
                                <div className="author-profile-title">
                                    <img src="/img/blog/rutab.png" className="shadow-sm" alt="image" />
                                    <h4>Rutab Sohail  </h4>
                                    <span className="d-block">Operational Business Analyst</span>
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