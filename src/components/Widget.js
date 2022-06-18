import React, { Component } from 'react';
import Advertisement from './Advertisement';
import Celebration from './Widget/Celebration';
import Newsletter from './Widget/Newsletter';
import PopularPosts from './Widget/PopularPosts';
import Topics from './Widget/Topics';


export default class Widget extends Component {
    render() {
        return (
            <>
                <div className="sidebar">
                    <PopularPosts />

                    <br />

                    <Topics />                    

                    <Newsletter />

                    <Celebration />

                    <Advertisement />

                    <div className="widget rounded">
                        <div className="widget-header text-center">
                            <h3 className="widget-title">Tag Clouds</h3>
                            <img src="images/wave.svg" className="wave" alt="wave" />
                        </div>
                        <div className="widget-content">
                            <a href="#" className="tag">#Trending</a>
                            <a href="#" className="tag">#Video</a>
                            <a href="#" className="tag">#Featured</a>
                            <a href="#" className="tag">#Gallery</a>
                            <a href="#" className="tag">#Celebrities</a>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
