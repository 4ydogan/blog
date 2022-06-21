import React, { Component, useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';

class Posts extends Component {

	state = {};

	allPosts() {
		let posts = this.props.posts?.map(content => {
			return <Post key={content.id} content={content} />
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