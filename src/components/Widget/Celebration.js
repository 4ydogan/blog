import React, { Component } from 'react'

const Celebration = () => {
    return (
        <>
            <div className="widget rounded">
                <div className="widget-header text-center">
                    <h3 className="widget-title">Celebration</h3>
                    <img src="https://katen-template.netlify.app/html/images/wave.svg" className="wave" alt="wave" />
                </div>
                <div className="widget-content">
                    <div className="post-carousel-widget">
                        <div className="post post-carousel">
                            <div className="thumb rounded">
                                <a href="category.html" className="category-badge position-absolute">How to</a>
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="images/widgets/widget-carousel-1.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <h5 className="post-title mb-0 mt-4"><a href="blog-single.html">5 Easy Ways You Can Turn Future Into Success</a></h5>
                            <ul className="meta list-inline mt-2 mb-0">
                                <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                        </div>
                        <div className="post post-carousel">
                            <div className="thumb rounded">
                                <a href="category.html" className="category-badge position-absolute">Trending</a>
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="images/widgets/widget-carousel-2.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <h5 className="post-title mb-0 mt-4"><a href="blog-single.html">Master The Art Of Nature With These 7 Tips</a></h5>
                            <ul className="meta list-inline mt-2 mb-0">
                                <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                        </div>
                        <div className="post post-carousel">
                            <div className="thumb rounded">
                                <a href="category.html" className="category-badge position-absolute">How to</a>
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="images/widgets/widget-carousel-1.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <h5 className="post-title mb-0 mt-4"><a href="blog-single.html">5 Easy Ways You Can Turn Future Into Success</a></h5>
                            <ul className="meta list-inline mt-2 mb-0">
                                <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                        </div>
                    </div>
                    <div className="slick-arrows-bot">
                        <button type="button" data-role="none" className="carousel-botNav-prev slick-custom-buttons" aria-label="Previous"><i className="icon-arrow-left"></i></button>
                        <button type="button" data-role="none" className="carousel-botNav-next slick-custom-buttons" aria-label="Next"><i className="icon-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Celebration;