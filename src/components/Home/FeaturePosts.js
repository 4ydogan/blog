import React, { Component } from 'react'

export default class FeaturePosts extends Component {
    render() {
        return (

                <div className="post featured-post-lg">
                    <div className="details clearfix">
                        <a href="category.html" className="category-badge">Inspiration</a>
                        <h2 className="post-title"><a href="blog-single.html">5 Easy Ways You Can Turn Future Into Success</a></h2>
                        <ul className="meta list-inline mb-0">
                            <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                            <li className="list-inline-item">29 March 2021</li>
                        </ul>
                    </div>
                    <a href="/posts/4">
                        <div className="thumb rounded">
                            <div className="inner data-bg-image" data-bg-image="https://katen-template.netlify.app/html/images/posts/featured-lg.jpg"></div>
                        </div>
                    </a>
                </div>

        )
    }
}
