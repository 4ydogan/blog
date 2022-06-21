import React, { Component } from 'react'

class Author extends Component {


  render() {

    const authorContent = this.props.content;

    return (
      <>
        {authorContent ?
          <div className="col-sm-6">
            <div className="post featured-post-md">
              <div className="details clearfix">
                <h4 className="post-title"><a href={`/authors/${authorContent.id}`}>{authorContent.name}</a></h4>
              </div>
              <a href={`/authors/${authorContent.id}`}>
                <div className="thumb rounded">
                  <div className="inner data-bg-image" data-bg-image={authorContent.image} style={{
                    backgroundImage: `url("${authorContent.image}")`
                  }}></div>
                </div>
              </a>
            </div>
          </div>
          : null}
      </>
    )
  }
}

export default Author;