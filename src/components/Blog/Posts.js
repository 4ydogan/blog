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
		this.setState({ posts: posts.data, authors: authors.data });
		this.setState({ loading: false });
	}

	allPosts() {
		let posts = this.state.posts?.map(content => {
			return <Post key={content.id} content={content} authors={this.state.authors} />
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