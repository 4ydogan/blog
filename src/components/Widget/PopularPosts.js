import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

const PopularPosts = () => {

    const [contents, setContents] = useState();
    const [element, setElement] = useState();

    useEffect(() => {
        axios.get(`/popular/`).then(popular => setContents({ popularPosts: popular.data }));

        axios.get(`/recent/`).then(recent => setContents({ recentPosts: recent.data }));

        posts();

    }, [])

    const post = (post) => {
        return (
            <div className="post post-list-sm circle">
                <div className="thumb circle">
                    <a href={`/posts/${post.id}`}>
                        <div className="inner">
                            <img src={post.images} alt={post.title} />
                        </div>
                    </a>
                </div>
                <div className="details clearfix">
                    <h6 className="post-title my-0"><a href={`/posts/${post.id}`}>{post.title}</a></h6>
                    <ul className="meta list-inline mt-1 mb-0">
                        <li className="list-inline-item">{post.date}</li>
                    </ul>
                </div>
            </div>
        )
    }

    const posts = () => {

        const popularPosts = contents?.popularPosts?.map(content => {
            return post(content);
        });
        
        const recentPosts = contents?.recentPosts?.map(content => {
            return post(content);
        });
        setElement({ popular: popularPosts, recent: recentPosts })
    }


    const [optionsSelect, setOptionSelect] = useState({
        popular: {
            ariaSelected: "true",
            className: "nav-link active",
            contentClassName: "tab-pane fade show active"
        },
        recent: {
            ariaSelected: "false",
            className: "nav-link",
            contentClassName: "tab-pane fade"
        }
    });

    const handleClick = (title) => {
        if (title === "popular") {
            setOptionSelect({
                popular: {
                    ariaSelected: "true",
                    className: "nav-link active",
                    contentClassName: "tab-pane fade show active"
                },
                recent: {
                    ariaSelected: "false",
                    className: "nav-link",
                    contentClassName: "tab-pane fade"
                }
            });
        }
        else {
            setOptionSelect({
                popular: {
                    ariaSelected: "false",
                    className: "nav-link",
                    contentClassName: "tab-pane"

                },
                recent: {
                    ariaSelected: "true",
                    className: "nav-link active",
                    contentClassName: "tab-pane fade show active"
                }
            });
        }
    }

    return (
        <>
            {element ? <div className="post-tabs rounded bordered">
                <ul className="nav nav-tabs nav-pills nav-fill" id="postsTab" role="tablist">
                    <li className="nav-item" role="presentation"><button onClick={() => handleClick("popular")} aria-controls="popular" aria-selected={optionsSelect.popular.ariaSelected} className={optionsSelect.popular.className} data-bs-target="#popular" data-bs-toggle="tab" id="popular-tab" role="tab" type="button">Popular</button></li>
                    <li className="nav-item" role="presentation"><button onClick={() => handleClick("recent")} aria-controls="recent" aria-selected={optionsSelect.recent.ariaSelected} className={optionsSelect.recent.className} data-bs-target="#recent" data-bs-toggle="tab" id="recent-tab" role="tab" type="button">Recent</button></li>
                </ul>
                <div className="tab-content" id="postsTabContent">
                    <div className="lds-dual-ring"></div>
                    <div aria-labelledby="popular-tab" className={optionsSelect.popular.contentClassName} id="popular" role="tabpanel">
                        {element?.popular}
                    </div>
                    <div aria-labelledby="recent-tab" className={optionsSelect.recent.contentClassName} id="recent" role="tabpanel">
                        {element?.recent}
                    </div>
                </div>
            </div> : null}
        </>
    )
}

export default PopularPosts;