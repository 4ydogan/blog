import React, { Component } from 'react';

export default class Trending extends Component {
    render() {
        return (
            <>
                <div className="section-header">
                    <h3 className="section-title">Trending</h3>
                    <img src="https://katen-template.netlify.app/html/images/wave.svg" className="wave" alt="wave" />
                </div>

                <div className="padding-30 rounded bordered">
						<div className="row gy-5">
							<div className="col-sm-6">
								<div className="post">
									<div className="thumb rounded">
										<a href="category.html" className="category-badge position-absolute">Culture</a>
										<span className="post-format">
											<i className="icon-picture"></i>
										</span>
										<a href="blog-single.html">
											<div className="inner">
												<img src="images/posts/trending-lg-1.jpg" alt="post-title" />
											</div>
										</a>
									</div>
									<ul className="meta list-inline mt-4 mb-0">
										<li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author"/>Katen Doe</a></li>
										<li className="list-inline-item">29 March 2021</li>
									</ul>
									<h5 className="post-title mb-3 mt-3"><a href="blog-single.html">Facts About Business That Will Help You Success</a></h5>
									<p className="excerpt mb-0">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy</p>
								</div>
								<div className="post post-list-sm square before-seperator">
									<div className="thumb rounded">
										<a href="blog-single.html">
											<div className="inner">
												<img src="images/posts/trending-sm-1.jpg" alt="post-title" />
											</div>
										</a>
									</div>
									<div className="details clearfix">
										<h6 className="post-title my-0"><a href="blog-single.html">3 Easy Ways To Make Your iPhone Faster</a></h6>
										<ul className="meta list-inline mt-1 mb-0">
											<li className="list-inline-item">29 March 2021</li>
										</ul>
									</div>
								</div>
								<div className="post post-list-sm square before-seperator">
									<div className="thumb rounded">
										<a href="blog-single.html">
											<div className="inner">
												<img src="images/posts/trending-sm-2.jpg" alt="post-title" />
											</div>
										</a>
									</div>
									<div className="details clearfix">
										<h6 className="post-title my-0"><a href="blog-single.html">An Incredibly Easy Method That Works For All</a></h6>
										<ul className="meta list-inline mt-1 mb-0">
											<li className="list-inline-item">29 March 2021</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="post">
									<div className="thumb rounded">
										<a href="category.html" className="category-badge position-absolute">Inspiration</a>
										<span className="post-format">
											<i className="icon-earphones"></i>
										</span>
										<a href="blog-single.html">
											<div className="inner">
												<img src="images/posts/trending-lg-2.jpg" alt="post-title" />
											</div>
										</a>
									</div>
									<ul className="meta list-inline mt-4 mb-0">
										<li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author"/>Katen Doe</a></li>
										<li className="list-inline-item">29 March 2021</li>
									</ul>
									<h5 className="post-title mb-3 mt-3"><a href="blog-single.html">5 Easy Ways You Can Turn Future Into Success</a></h5>
									<p className="excerpt mb-0">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy</p>
								</div>
								<div className="post post-list-sm square before-seperator">
									<div className="thumb rounded">
										<a href="blog-single.html">
											<div className="inner">
												<img src="images/posts/trending-sm-3.jpg" alt="post-title" />
											</div>
										</a>
									</div>
									<div className="details clearfix">
										<h6 className="post-title my-0"><a href="blog-single.html">Here Are 8 Ways To Success Faster</a></h6>
										<ul className="meta list-inline mt-1 mb-0">
											<li className="list-inline-item">29 March 2021</li>
										</ul>
									</div>
								</div>
								<div className="post post-list-sm square before-seperator">
									<div className="thumb rounded">
										<a href="blog-single.html">
											<div className="inner">
												<img src="images/posts/trending-sm-4.jpg" alt="post-title" />
											</div>
										</a>
									</div>
									<div className="details clearfix">
										<h6 className="post-title my-0"><a href="blog-single.html">Master The Art Of Nature With These 7 Tips</a></h6>
										<ul className="meta list-inline mt-1 mb-0">
											<li className="list-inline-item">29 March 2021</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
            </>
        )
    }
}
