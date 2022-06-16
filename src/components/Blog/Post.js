import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <>
        <div class="col-sm-6">
          <div class="post post-grid rounded bordered">
            <div class="thumb top-rounded">
              <a href="category.html" class="category-badge position-absolute">Inspiration</a>
              <a href="blog-single.html">
                <div class="inner">
                  <img src="https://katen-template.netlify.app/html/images/posts/post-md-1.jpg" alt="post-title" />
                </div>
              </a>
            </div>
            <div class="details">
              <ul class="meta list-inline mb-0">
                <li class="list-inline-item"><a href="#"><img src="images/other/author-sm.png" class="author" alt="author" />Katen Doe</a></li>
                <li class="list-inline-item">29 March 2021</li>
              </ul>
              <h5 class="post-title mb-3 mt-3"><a href="blog-single.html">Most Important Thing You Need To Know About Swim</a></h5>
              <p class="excerpt mb-0">I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Post;