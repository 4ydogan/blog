import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LatestPosts = () => {

	const [contents, setContents] = useState();

	useEffect(() => {
		axios.get(`/recent/`).then(recent => setContents({ recentPosts: recent.data }));
	}, [])

	const allPosts = () => {
		let posts = contents.recentPosts?.map(content => {
			return Post(content)
		});

		return posts;
	}

	const Post = (content) => {
		<>
			<div className="col-md-12 col-sm-6">
				<div className="post post-list clearfix">
					<div className="thumb rounded">
						<a href="blog-single.html">
							<div className="inner">
								<img src={content.images} alt="post-title" />
							</div>
						</a>
					</div>
					<div className="details">
						<ul className="meta list-inline mb-3">
							<li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
							<li className="list-inline-item"><a href="#">Lifestyle</a></li>
							<li className="list-inline-item">29 March 2021</li>
						</ul>
						<h5 className="post-title"><a href="blog-single.html">Master The Art Of Nature With These 7 Tips</a></h5>
						<p className="excerpt mb-0">A wonderful serenity has taken possession of my entire soul, like these sweet mornings</p>
						<div className="post-bottom clearfix d-flex align-items-center">
							<div className="social-share me-auto">
								<button className="toggle-button icon-share"></button>
								<ul className="icons list-unstyled list-inline mb-0">
									<li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="far fa-envelope"></i></a></li>
								</ul>
							</div>
							<div className="more-button float-end">
								<a href="blog-single.html"><span className="icon-options"></span></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	}
	return (
		<>
			<div className="section-header">
				<h3 className="section-title">Latest Posts</h3>
				<img src="https://katen-template.netlify.app/html/images/wave.svg" className="wave" alt="wave" />
			</div>

			<div className="padding-30 rounded bordered">

				<div className="row">

					{/* { allPosts() } */}

				</div>
				<div className="text-center">
					<button className="btn btn-simple">Load More</button>
				</div>

			</div>
		</>
	)
}

export default LatestPosts;