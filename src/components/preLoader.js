import React from 'react'

const preLoader = (loading) => {
    return (
        loading ?
            <div id="preloader">
                <div className="book">
                    <div className="inner">
                        <div className="left"></div>
                        <div className="middle"></div>
                        <div className="right"></div>
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            : null
    )
}

export default preLoader;
