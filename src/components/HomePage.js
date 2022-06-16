import React, { Component } from 'react';
import FeaturePosts from './Home/FeaturePosts';
import Trending from './Home/Trending';
import PopularPosts from './Home/PopularPosts';
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
                            <div className="col-lg-4">
                                <PopularPosts />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="main-content">
                    <div className="container-xl">
                        <div className="row gy-4">
                            <div className="col-lg-8">

                                <Trending />

                                <br />

                                <div className="ads-horizontal text-md-center">
                                    <span className="ads-title">- Sponsored Ad -</span>
                                    <a href="#">
                                        <img src="images/ads/ad-750.png" alt="Advertisement" />
                                    </a>
                                </div>

                                <br />

                                <LatestPosts />

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
