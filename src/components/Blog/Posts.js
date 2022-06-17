import agent from '../../api/agent';
import React, { Component, useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';

class Posts extends Component {

	state = {};


	async componentDidMount() {
		this.setState({ loading: true });
		const response = await fetch(`/blogpost/1`);
		const data = await response.json();
		this.setState({ content: data });
		this.setState({ loading: false });
	}

	render() {

		return (
			<>
				{ this.state.loading ? null : 
					<div className="row gy-4">
						<Post content={this.state.content} />
						<div className="col-sm-6">
							<div className="post post-grid rounded bordered">
								<div className="thumb top-rounded">
									<a href="category.html" className="category-badge position-absolute">Inspiration</a>
									<a href="blog-single.html">
										<div className="inner">
											<img src="https://katen-template.netlify.app/html/images/posts/post-md-1.jpg" alt="post-title" />
										</div>
									</a>
								</div>
								<div className="details">
									<ul className="meta list-inline mb-0">
										<li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
										<li className="list-inline-item">29 March 2021</li>
									</ul>
									<h5 className="post-title mb-3 mt-3"><a href="blog-single.html">Most Important Thing You Need To Know About Swim</a></h5>
									<p className="excerpt mb-0">I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.</p>
								</div>
							</div>
						</div>

						<div className="col-sm-6">
							<div className="post post-grid rounded bordered">
								<div className="thumb top-rounded">
									<a href="category.html" className="category-badge position-absolute">Fashion</a>
									<a href="blog-single.html">
										<div className="inner">
											<img src="https://katen-template.netlify.app/html/images/posts/post-md-1.jpg" alt="post-title" />
										</div>
									</a>
								</div>
								<div className="details">
									<ul className="meta list-inline mb-0">
										<li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
										<li className="list-inline-item">29 March 2021</li>
									</ul>
									<h5 className="post-title mb-3 mt-3"><a href="blog-single.html">The Secrets To Finding Class Tools For Your Dress</a></h5>
									<p className="excerpt mb-0">I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.</p>
								</div>
							</div>
						</div>

						<div className="col-sm-6">
							<div className="post post-grid rounded bordered">
								<div className="thumb top-rounded">
									<a href="category.html" className="category-badge position-absolute">Lifestyle</a>
									<span className="post-format">
										<i className="icon-camrecorder"></i>
									</span>
									<a href="blog-single.html">
										<div className="inner">
											<img src="https://katen-template.netlify.app/html/images/posts/post-md-1.jpg" alt="post-title" />
										</div>
									</a>
								</div>
								<div className="details">
									<ul className="meta list-inline mb-0">
										<li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
										<li className="list-inline-item">29 March 2021</li>
									</ul>
									<h5 className="post-title mb-3 mt-3"><a href="blog-single.html">How I Improved My Fashion Style In One Day</a></h5>
									<p className="excerpt mb-0">I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="post post-grid rounded bordered">
								<div className="thumb top-rounded">
									<a href="category.html" className="category-badge position-absolute">Trending</a>
									<a href="blog-single.html">
										<div className="inner">
											<img src="https://katen-template.netlify.app/html/images/posts/post-md-1.jpg" alt="post-title" />
										</div>
									</a>
								</div>
								<div className="details">
									<ul className="meta list-inline mb-0">
										<li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
										<li className="list-inline-item">29 March 2021</li>
									</ul>
									<h5 className="post-title mb-3 mt-3"><a href="blog-single.html">3 Easy Ways To Make Your iPhone Faster</a></h5>
									<p className="excerpt mb-0">I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.</p>
								</div>
							</div>
						</div>

						<div className="col-sm-6">
							<div className="post post-grid rounded bordered">
								<div className="thumb top-rounded">
									<a href="category.html" className="category-badge position-absolute">Fashion</a>
									<a href="blog-single.html">
										<div className="inner">
											<img src="https://katen-template.netlify.app/html/images/posts/post-md-1.jpg" alt="post-title" />
										</div>
									</a>
								</div>
								<div className="details">
									<ul className="meta list-inline mb-0">
										<li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
										<li className="list-inline-item">29 March 2021</li>
									</ul>
									<h5 className="post-title mb-3 mt-3"><a href="blog-single.html">Wondering How To Make Your Hair Style Rock?</a></h5>
									<p className="excerpt mb-0">I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.</p>
								</div>
							</div>
						</div>

						<div className="col-sm-6">
							<div className="post post-grid rounded bordered">
								<div className="thumb top-rounded">
									<a href="category.html" className="category-badge position-absolute">How To</a>
									<span className="post-format">
										<i className="icon-picture"></i>
									</span>
									<a href="blog-single.html">
										<div className="inner">
											<img src="https://katen-template.netlify.app/html/images/posts/post-md-1.jpg" alt="post-title" />
										</div>
									</a>
								</div>
								<div className="details">
									<ul className="meta list-inline mb-0">
										<li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
										<li className="list-inline-item">29 March 2021</li>
									</ul>
									<h5 className="post-title mb-3 mt-3"><a href="blog-single.html">How To Make More Construction By Doing Less</a></h5>
									<p className="excerpt mb-0">I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.</p>
								</div>
							</div>
						</div>

						<div className="col-sm-6">
							<div className="post post-grid rounded bordered">
								<div className="thumb top-rounded">
									<a href="category.html" className="category-badge position-absolute">Culture</a>
									<a href="blog-single.html">
										<div className="inner">
											<img src="https://katen-template.netlify.app/html/images/posts/post-md-1.jpg" alt="post-title" />
										</div>
									</a>
								</div>
								<div className="details">
									<ul className="meta list-inline mb-0">
										<li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
										<li className="list-inline-item">29 March 2021</li>
									</ul>
									<h5 className="post-title mb-3 mt-3"><a href="blog-single.html">An Incredibly Easy Method That Works For All</a></h5>
									<p className="excerpt mb-0">I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.</p>
								</div>
							</div>
						</div>

						<div className="col-sm-6">
							<div className="post post-grid rounded bordered">
								<div className="thumb top-rounded">
									<a href="category.html" className="category-badge position-absolute">Inspiration</a>
									<a href="blog-single.html">
										<div className="inner">
											<img src="https://katen-template.netlify.app/html/images/posts/post-md-1.jpg" alt="post-title" />
										</div>
									</a>
								</div>
								<div className="details">
									<ul className="meta list-inline mb-0">
										<li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
										<li className="list-inline-item">29 March 2021</li>
									</ul>
									<h5 className="post-title mb-3 mt-3"><a href="blog-single.html">10 Ways To Immediately Start Selling Furniture</a></h5>
									<p className="excerpt mb-0">I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.</p>
								</div>
							</div>
						</div>

						<div className="col-sm-6">
							<div className="post post-grid rounded bordered">
								<div className="thumb top-rounded">
									<a href="category.html" className="category-badge position-absolute">Lifestyle</a>
									<span className="post-format">
										<i className="icon-earphones"></i>
									</span>
									<a href="blog-single.html">
										<div className="inner">
											<img src="https://katen-template.netlify.app/html/images/posts/post-md-1.jpg" alt="post-title" />
										</div>
									</a>
								</div>
								<div className="details">
									<ul className="meta list-inline mb-0">
										<li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
										<li className="list-inline-item">29 March 2021</li>
									</ul>
									<h5 className="post-title mb-3 mt-3"><a href="blog-single.html">Now You Can Have Your Thoughts Done Safely</a></h5>
									<p className="excerpt mb-0">I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.</p>
								</div>
							</div>
						</div>

					</div>
				}
			</>
		)

	}
}

export default Posts;