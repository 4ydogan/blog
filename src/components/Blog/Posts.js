import agent from '../../api/agent';
import React, { Component, useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';

class Posts extends Component {

	state = {};

	async componentDidMount() {
		this.setState({ loading: true });
		const posts = await axios.get(`/posts`);
		const authors = await axios.get(`/authors`);
		const categories = await axios.get(`/categories`)
		this.setState({ posts: posts.data, authors: authors.data , categories: categories.data});
		this.setState({ loading: false });
	}

	allPosts() {
		let posts = this.state.posts?.map(content => {
			return <Post key={content.id} content={content} authors={this.state.authors} categories={this.state.categories} />
		});

		return posts;
	}

	render() {

		return (
			<>
				{this.state.loading ? null :
					<div className="row gy-4">
						{this.allPosts()}
					</div>
				}
			</>
		)

	}
}

export default Posts;