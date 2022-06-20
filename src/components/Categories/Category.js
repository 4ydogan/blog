import React, { Component } from 'react'

class Category extends Component {


  render() {

    const categoryContent = this.props.content;

    return (
      <>
        {categoryContent ?
          <div className="col-sm-6">
            <div className="post featured-post-md">
              <div className="details clearfix">
                <h4 className="post-title"><a href={`/categories/${categoryContent.name}`}>{categoryContent.name}</a></h4>
              </div>
              <a href={`/categories/${categoryContent.name}`}>
                <div className="thumb rounded">
                  <div className="inner data-bg-image" data-bg-image={categoryContent.image}></div>
                </div>
              </a>
            </div>
          </div>
          : null}
      </>
    )
  }
}

export default Category;