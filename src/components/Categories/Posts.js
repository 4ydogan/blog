import React, { Component, useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';

class Posts extends Component {

	state = {};

	async componentDidMount() {
		this.setState({ loading: true });
		const posts = this.props.posts;
		const authors = this.props.authors
		const category = this.props.category;
		this.setState({ posts: posts, authors: authors , category: category});
		this.setState({ loading: false });
	}

	allPosts() {
		let posts = this.state.posts?.map(content => {
			return <Post key={content.id} content={content} authors={this.state.authors} category={this.state.category} />
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