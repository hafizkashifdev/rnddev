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

                        <div className="article-image text-center">
                            <img src="/img/blog/rnd-blog-6.png" alt="image" className="w-75" />
                        </div>
                        <br/>
                        <div className="article-image text-center">
                            <img src="/img/blog/comming-soon.png" alt="image" className="w-75" />
                        </div>
                        <div className="article-author">
                            <div className="author-profile-header"></div>
                            <div className="author-profile">
                                <div className="author-profile-title">
                                    <img src="/img/blog/sangeetha.png" className="shadow-sm" alt="image" />
                                    <h4>Sangeetha Sigamani</h4>
                                    <span className="d-block">Head of Business Analysis</span>
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