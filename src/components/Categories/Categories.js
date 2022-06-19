import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import Category from './Category';

class Categories extends Component {

	state = {};

	async componentDidMount() {
		this.setState({ loading: true });
		const response = await axios.get(`/categories/all`);
		this.setState({ posts: response.data });
		this.setState({ loading: false });
	}

	allPosts() {
		let posts = this.state.posts?.map(content => {
			return <Category key={content.id} content={content} />
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

export default Categories;