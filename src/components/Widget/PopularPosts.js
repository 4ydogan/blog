import axios from 'axios';
import React, { Component, useState } from 'react'

export default class PopularPosts extends Component {

    state = {
        optionsSelect: {
            popular: {
                ariaSelected: "true",
                className: "nav-link active",
                contentClassName: "tab-pane fade show active"
            },
            recent: {
                ariaSelected: "false",
                className: "nav-link",
                contentClassName: "tab-pane fade"
            }
        }
    };

    async componentDidMount() {
        this.setState({ loading: true });
        await axios.get(`/popular/`).then(popular => this.setState({ popularPosts: popular.data }));

        await axios.get(`/recent/`).then(recent => this.setState({ recentPosts: recent.data }));
        this.setState({ loading: false });
    }

    render() {
        let element;

        const post = (post) => {
            return (
                <div className="post post-list-sm circle">
                    <div className="thumb circle">
                        <a href={`/posts/${post.id}`}>
                            <div className="inner">
                                <img src={post.images} alt={post.title} style={{ width: "60px", height: "60px" }} />
                            </div>
                        </a>
                    </div>
                    <div className="details clearfix">
                        <h6 className="post-title my-0"><a href={`/posts/${post.id}`}>{post.title}</a></h6>
                        <ul className="meta list-inline mt-1 mb-0">
                            <li className="list-inline-item">{post.date}</li>
                        </ul>
                    </div>
                </div>
            )
        }

        const posts = () => {

            const popularPosts = this.state?.popularPosts?.map(content => {
                return post(content);
            });

            const recentPosts = this.state?.recentPosts?.map(content => {
                return post(content);
            });
            element = { popular: popularPosts, recent: recentPosts };
        }

        const handleClick = (title) => {
            if (title === "popular") {
                this.setState({
                    optionsSelect: {
                        popular: {
                            ariaSelected: "true",
                            className: "nav-link active",
                            contentClassName: "tab-pane fade show active"
                        },
                        recent: {
                            ariaSelected: "false",
                            className: "nav-link",
                            contentClassName: "tab-pane fade"
                        }
                    }
                });
            }
            else {
                this.setState({
                    optionsSelect: {
                        popular: {
                            ariaSelected: "false",
                            className: "nav-link",
                            contentClassName: "tab-pane"

                        },
                        recent: {
                            ariaSelected: "true",
                            className: "nav-link active",
                            contentClassName: "tab-pane fade show active"
                        }
                    }
                });
            }
        }

        posts();

        return (
            <>
                {element ? <div className="post-tabs rounded bordered">
                    <ul className="nav nav-tabs nav-pills nav-fill" id="postsTab" role="tablist">
                        <li className="nav-item" role="presentation"><button onClick={() => handleClick("popular")} aria-controls="popular" aria-selected={this.state.optionsSelect.popular.ariaSelected} className={this.state.optionsSelect.popular.className} data-bs-target="#popular" data-bs-toggle="tab" id="popular-tab" role="tab" type="button">Popular</button></li>
                        <li className="nav-item" role="presentation"><button onClick={() => handleClick("recent")} aria-controls="recent" aria-selected={this.state.optionsSelect.recent.ariaSelected} className={this.state.optionsSelect.recent.className} data-bs-target="#recent" data-bs-toggle="tab" id="recent-tab" role="tab" type="button">Recent</button></li>
                    </ul>
                    <div className="tab-content" id="postsTabContent">
                        <div className="lds-dual-ring"></div>
                        <div aria-labelledby="popular-tab" className={this.state.optionsSelect.popular.contentClassName} id="popular" role="tabpanel">
                            {element?.popular}
                        </div>
                        <div aria-labelledby="recent-tab" className={this.state.optionsSelect.recent.contentClassName} id="recent" role="tabpanel">
                            {element?.recent}
                        </div>
                    </div>
                </div> : null}
            </>
        )
    }
}