import React, { useEffect } from 'react'

const Topics = () => {
    return (
        <>
            <div className="widget rounded">
                <div className="widget-header text-center">
                    <h3 className="widget-title">Explore Topics</h3>
                    <img src="images/wave.svg" className="wave" alt="wave" />
                </div>
                <div className="widget-content">
                    <ul className="list">
                        <li><a href="#">Lifestyle</a><span>(5)</span></li>
                        <li><a href="#">Inspiration</a><span>(2)</span></li>
                        <li><a href="#">Fashion</a><span>(4)</span></li>
                        <li><a href="#">Politic</a><span>(1)</span></li>
                        <li><a href="#">Trending</a><span>(7)</span></li>
                        <li><a href="#">Culture</a><span>(3)</span></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Topics;
