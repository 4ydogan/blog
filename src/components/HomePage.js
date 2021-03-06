import React, { Component } from 'react';
import FeaturePosts from './Home/FeaturePosts';
import TrendingPosts from './Home/TrendingPosts';
import LatestPosts from './Home/LatestPosts';
import Widget from './Widget';

class HomePage extends Component {
    render() {
        return (
            <>
                <section className="main-content">
                    <div className="container-xl">
                        <div className="row gy-4">
                            <div className="col-lg-8">
                                <FeaturePosts />

                                <br />
                                <TrendingPosts />

                                <br />

                                <div className="text-md-center">
                                    <span className="my-advertisement-title">- Sponsored Ad -</span>
                                    <a href="#">
                                        <img  className="my-horizontal-advertisement-img" src="https://i.hizliresim.com/ouxsrxy.jpg" alt="Advertisement" />
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
