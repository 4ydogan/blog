import axios from 'axios';
import React, { Component } from 'react'
export default class FeaturePosts extends Component {

    state = {};

    async componentDidMount() {
        this.setState({ loading: true });
        const response = await axios.get(`/posts/main`);
        const category = await axios.get(`categories/${response.data.category_id}`);
        const author = await axios.get(`authors/${response.data.author_id}`);
        this.setState({ content: response.data, category: category.data, author: author.data });
        this.setState({ loading: false });
    }

    render() {
        return (


            this.state.content && this.state.category && this.state.author ?
                <div className="post featured-post-lg">
                    <div className="details clearfix">
                        <a href={`/categories/${this.state.content.category_id}`} className="category-badge">{this.state.category.category.name}</a>
                        <h2 className="post-title"><a href={`/posts/${this.state.content.id}`}>{this.state.content.title}</a></h2>
                        <ul className="meta list-inline mb-0">
                            <li className="list-inline-item"><a href={`/authors/${this.state.content.author_id}`}>{this.state.author.author.name}</a></li>
                            <li className="list-inline-item">{this.state.content.date}</li>
                        </ul>
                    </div>
                    <a href={`/posts/${this.state.content.id}`}>
                        <div className="thumb rounded">
                            <div className="inner data-bg-image" data-bg-image={this.state.content.images} style={{backgroundImage: `url(${this.state.content.images})`}}></div>
                        </div>
                    </a>
                </div>
                : null


        )
    }
}
