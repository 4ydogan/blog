import React, { Component } from 'react';
import Advertisement from './Advertisement';
import Celebration from './Widget/Celebration';
import Newsletter from './Widget/Newsletter';
import PopularPosts from './Widget/PopularPosts';
import TagClouds from './Widget/TagClouds';
import Topics from './Widget/Topics';


export default class Widget extends Component {
    render() {
        return (
            <>
                <div className="sidebar">
                    <PopularPosts />

                    <br />

                    <Topics />                    

                    {/* <Newsletter />

                    <Celebration /> */}

                    <Advertisement />

                    {/* <TagClouds /> */}

                </div>
            </>
        )
    }
}
