import React, { Component, useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';

class Posts extends Component {

	state = {};

	async componentDidMount() {
		this.setState({ loading: true });
		const response = await axios.get(`/post/all`);
		this.setState({ posts: response.data });
		this.setState({ loading: false });
	}

	allPosts() {
		let posts = this.state.posts?.map(content => {
			if (content.author === this.props.authorID) {
				return <Post key={content.id} content={content} />
			}
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