import React, { Component } from 'react'
import agent from '../../api/agent'

class Post extends Component {

  state = {
    postContent: this.props.content
  };

  render() {

    return (
      <>
        {this.state.postContent ? <div className="col-sm-6">
          <div className="post post-grid rounded bordered">
            <div className="thumb top-rounded">
              <a href="category.html" className="category-badge position-absolute">Kategori</a>
              <a href="blog-single.html">
                <div className="inner">
                  <img src={this.state.postContent.images} alt="post-title" />
                </div>
              </a>
            </div>
            <div className="details">
              <ul className="meta list-inline mb-0">
                <li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
                <li className="list-inline-item">29 March 2021</li>
              </ul>
              <h5 className="post-title mb-3 mt-3"><a href={`/blogposts/${this.state.postContent.id}`}>{this.state.postContent.title}</a></h5>
              <p className="excerpt mb-0">{this.state.postContent.content}</p>
            </div>
          </div>
        </div> : null}
      </>
    )
  }
}

export default Post;