import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';

class LatestPosts extends Component {

	state = {

	}

	async componentDidMount() {
		this.setState({ loading: true });
		const response = await axios.get(`/popular/`);
		const categories = await axios.get(`categories/`);
		const authors = await axios.get(`authors/`);
		this.setState({ posts: response.data, categories: categories.data, authors: authors.data });
		this.setState({ loading: false });
	}

	render() {

		const allPosts = () => {
			let posts = this.state.posts?.map(content => {
				return Post(content)
			});

			return posts;
		}

		const Post = (content) => {

			const author = this.state.authors?.find(t => t.id === content.author_id);
			const category = this.state.categories?.find(t => t.id === content.category_id);

			return <>
				{
					author && category ? 
					<div className="col-md-12 col-sm-6">
						<div className="post post-list clearfix">
							<div className="thumb rounded">
								<a href={`/posts/${content.id}`}>
									<div className="inner">
										<img src={content.images} alt="post-title" />
									</div>
								</a>
							</div>
							<div className="details">
								<ul className="meta list-inline mb-3">
									<li className="list-inline-item"><a href={`/authors/${content.author_id}`}><img src={author.image} className="author" alt="author" />{author.name}</a></li>
									<li className="list-inline-item"><a href={`/categories/${content.category_id}`}>{category.name}</a></li>
									<li className="list-inline-item">{content.date}</li>
								</ul>
								<h5 className="post-title"><a href={`/posts/${content.id}`}>{content.title}</a></h5>
								<p className="excerpt mb-0">{content.content.substring(0,150)}</p>
							</div>
						</div>
					</div>
					: null
				}
			</>
		}
		return (
			<>
				<div className="section-header">
					<h3 className="section-title">Trending Posts</h3>
					<img src="https://katen-template.netlify.app/html/images/wave.svg" className="wave" alt="wave" />
				</div>

				<div className="padding-30 rounded bordered">

					<div className="row">

						{this.state.posts ? allPosts() : null}

					</div>
				</div>
			</>
		)
	}
}

export default LatestPosts;