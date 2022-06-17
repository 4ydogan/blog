import React, { Component } from 'react';
import PopularPosts from './Home/PopularPosts';


export default class Widget extends Component {
    render() {
        return (
            <>
                <div className="sidebar">
                    <PopularPosts />

                    <br />

                    <div className="widget rounded">
                        <div className="widget-header text-center">
                            <h3 className="widget-title">Explore Topics</h3>
                            <img src="images/wave.svg" className="wave" alt="wave" />
                        </div>
                        <div className="widget-content">
                            <ul className="list">
                                <li><a href="#">Lifestyle</a><span>(5)</span></li>
                                <li><a href="#">Inspiration</a><span>(2)</span></li>
                                <li><a href="#">Fashion</a><span>(4)</span></li>
                                <li><a href="#">Politic</a><span>(1)</span></li>
                                <li><a href="#">Trending</a><span>(7)</span></li>
                                <li><a href="#">Culture</a><span>(3)</span></li>
                            </ul>
                        </div>

                    </div>

                    <div className="widget rounded">
                        <div className="widget-header text-center">
                            <h3 className="widget-title">Newsletter</h3>
                            <img src="images/wave.svg" className="wave" alt="wave" />
                        </div>
                        <div className="widget-content">
                            <span className="newsletter-headline text-center mb-3">Join 70,000 subscribers!</span>
                            <form>
                                <div className="mb-2">
                                    <input className="form-control w-100 text-center" placeholder="Email address…" type="email" />
                                </div>
                                <button className="btn btn-default btn-full" type="submit">Sign Up</button>
                            </form>
                            <span className="newsletter-privacy text-center mt-3">By signing up, you agree to our <a href="#">Privacy Policy</a></span>
                        </div>
                    </div>

                    <div className="widget rounded">
                        <div className="widget-header text-center">
                            <h3 className="widget-title">Celebration</h3>
                            <img src="images/wave.svg" className="wave" alt="wave" />
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

                    <div className="widget no-container rounded text-md-center">
                        <span className="ads-title">- Sponsored Ad -</span>
                        <a href="#" className="widget-ads">
                            <img src="images/ads/ad-360.png" alt="Advertisement" />
                        </a>
                    </div>

                    <div className="widget rounded">
                        <div className="widget-header text-center">
                            <h3 className="widget-title">Tag Clouds</h3>
                            <img src="images/wave.svg" className="wave" alt="wave" />
                        </div>
                        <div className="widget-content">
                            <a href="#" className="tag">#Trending</a>
                            <a href="#" className="tag">#Video</a>
                            <a href="#" className="tag">#Featured</a>
                            <a href="#" className="tag">#Gallery</a>
                            <a href="#" className="tag">#Celebrities</a>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
