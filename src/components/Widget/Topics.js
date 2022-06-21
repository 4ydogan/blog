import axios from 'axios';
import React, { Component, useEffect } from 'react'

class Topics extends Component {

    state = {};

	async componentDidMount() {
		this.setState({ loading: true });
		const response = await axios.get(`/categories/all`);
		this.setState({ categories: response.data});
		this.setState({ loading: false });
	}

	allTopics() {
		let posts = this.state.categories?.map(content => {
			return <li key={content.id}><a href={`/categories/${content.name}`}>{content.name}</a><span></span></li>
		});

		return posts;
	}

    render() {
        return (
            <>
                <div className="widget rounded">
                    <div className="widget-header text-center">
                        <h3 className="widget-title">Explore Topics</h3>
                        <img src="images/wave.svg" className="wave" alt="wave" />
                    </div>
                    <div className="widget-content">
                        <ul className="list">
                            {this.allTopics()}
                        </ul>
                    </div>

                </div>
            </>
        )
    }
}

export default Topics;
