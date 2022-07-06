import React, { Component } from 'react'
import agent from '../../api/agent'

class Post extends Component {


  render() {

    const postContent =  this.props.content;
    const author = this.props.author;
    const category = this.props.categories.find(t => t.id === postContent.category_id)

    return (
      <>
        {postContent && author ? <div className="col-sm-6">
          <div className="post post-grid rounded bordered">
            <div className="thumb top-rounded">
              <a href={`/categories/${category.id}`} className="category-badge position-absolute">{category.name}</a>
              <a href={`/posts/${postContent.id}`}>
                <div className="inner">
                  <img src={postContent.images} alt="post-title" />
                </div>
              </a>
            </div>
            <div className="details">
              <ul className="meta list-inline mb-0">
                <li className="list-inline-item"><a href={`/authors/${postContent.author_id}`}><img src={author.image} className="author" alt={author.name} />{author.name}</a></li>
                <li className="list-inline-item">{postContent.date}</li>
              </ul>
              <h5 className="post-title mb-3 mt-3"><a href={`/posts/${postContent.id}`}>{postContent.title}</a></h5>
              <p className="excerpt mb-0">{postContent.content}</p>
            </div>
          </div>
        </div> : null}
      </>
    )
  }
}

export default Post;