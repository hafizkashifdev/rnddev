import React from 'react';
import Link from 'next/link';

const BlogCard = () => {
    return (
        <div className="blog-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/img/blog/rnd-blog-1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <h3>
                                    <Link href="/blog-details">
                                        <a>R&D Tax Credits</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image-two">
                                <Link href="/blog-details-two">
                                    <a>
                                        <img src="/img/blog/rnd-blog-2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <h3>
                                    <Link href="/blog-details-two">
                                        <a>Identify your R&D expense</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link href="/blog-details-three">
                                    <a>
                                        <img src="/img/blog/rnd-blog-3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <h3>
                                    <Link href="/blog-details-three">
                                        <a>Preventing abuse of R&D tax relief for SMEs</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link href="/blog-details-four">
                                    <a>
                                        <img src="/img/blog/rnd-blog-4.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <h3>
                                    <Link href="/blog-details-four">
                                        <a>How investing in AI will lead to economic growth?</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link href="/blog-details-five">
                                    <a>
                                        <img src="/img/blog/rnd-blog-5.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <h3>
                                    <Link href="/blog-details-five">
                                        <a>Limitations of Automated R&D Tax Credit Solutions</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        {/* Pagination */}
                        <div className="pagination-area text-center">
                            <Link href="#">
                                <a className="prev page-numbers">
                                    <i className='bx bx-chevrons-left'></i>
                                </a>
                            </Link>
                            <span className="page-numbers current" aria-current="page">1</span>
                            <Link href="#">
                                <a className="page-numbers">2</a>
                            </Link>
                            <Link href="#">
                                <a className="page-numbers">3</a>
                            </Link>
                            <Link href="#">
                                <a className="page-numbers">4</a>
                            </Link>
                            <Link href="#">
                                <a className="next page-numbers">
                                    <i className='bx bx-chevrons-right'></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;