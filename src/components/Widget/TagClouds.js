import React, { Component } from 'react'

const TagClouds = () => {
    return (
        <>
            <div className="widget rounded">
                <div className="widget-header text-center">
                    <h3 className="widget-title">Tag Clouds</h3>
                    <img src="https://katen-template.netlify.app/html/images/wave.svg" className="wave" alt="wave" />
                </div>
                <div className="widget-content">
                    <a href="#" className="tag">#Trending</a>
                    <a href="#" className="tag">#Video</a>
                    <a href="#" className="tag">#Featured</a>
                    <a href="#" className="tag">#Gallery</a>
                    <a href="#" className="tag">#Celebrities</a>
                </div>
            </div>
        </>
    )
}

export default TagClouds;