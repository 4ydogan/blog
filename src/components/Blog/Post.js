import React, { Component } from 'react'
import agent from '../../api/agent'

class Post extends Component {

  render() {
    return (
      <>
        {this.props.content ? <div className="col-sm-6">
          <div className="post post-grid rounded bordered">
            <div className="thumb top-rounded">
              <a href="category.html" className="category-badge position-absolute">Kategori</a>
              <a href="blog-single.html">
                <div className="inner">
                  <img src="https://katen-template.netlify.app/html/images/posts/post-md-1.jpg" alt="post-title" />
                </div>
              </a>
            </div>
            <div className="details">
              <ul className="meta list-inline mb-0">
                <li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
                <li className="list-inline-item">29 March 2021</li>
              </ul>
              <h5 className="post-title mb-3 mt-3"><a href={`/blogposts/${this.props.content.id}`}>{this.props.content.title}</a></h5>
              <p className="excerpt mb-0">{this.props.content.content}</p>
            </div>
          </div>
        </div> : null}
      </>
    )
  }
}

export default Post;