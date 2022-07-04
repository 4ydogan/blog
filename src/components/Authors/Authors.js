import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import Author from './Author';

class Authors extends Component {

	state = {};

	async componentDidMount() {
		this.setState({ loading: true });
		const response = await axios.get(`/authors`);
		this.setState({ authors: response.data });
		this.setState({ loading: false });
	}

	allAuthors() {
		let posts = this.state.authors?.map(content => {
			return <Author key={content.id} content={content} />
		});

		return posts;
	}

	render() {

		return (
			<>
				{this.state.loading ? null :
					<div className="row gy-4">
						{this.allAuthors()}
					</div>
				}
			</>
		)

	}
}

export default Authors;