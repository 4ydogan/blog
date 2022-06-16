import React, { Component } from 'react';
import FeaturePosts from './Home/FeaturePosts';
import Trending from './Home/Trending';
import WidgetPosts from './Widget/WidgetPosts';
import LatestPosts from './Home/LatestPosts';
import Widget from './Widget';

class HomePage extends Component {
    render() {
        return (
            <>
                <section id="hero">
                    <div className="container-xl">
                        <div className="row gy-4">
                            <FeaturePosts />
                            <WidgetPosts />
                        </div>
                    </div>
                </section>
                <section className="main-content">
                    <div className="container-xl">
                        <div className="row gy-4">
                            <div className="col-lg-8">

                                <Trending />

                                <div className="spacer" data-height="50"></div>

                                <div className="ads-horizontal text-md-center">
                                    <span className="ads-title">- Sponsored Ad -</span>
                                    <a href="#">
                                        <img src="images/ads/ad-750.png" alt="Advertisement" />
                                    </a>
                                </div>

                                <div className="spacer" data-height="50">
                                    <br/>
                                </div>
                                
                                <LatestPosts />
                                
                                <div className="spacer" data-height="50"></div>

                            </div>
                            <div className="col-lg-4">
                                <Widget />
                            </div>

                        </div>

                    </div>
                </section>
            </>
        )
    }
}

export default HomePage;
