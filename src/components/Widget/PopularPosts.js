import axios from 'axios';
import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

const WidgetPosts = () => {

    const [contents, setContents] = useState();

    const post = (post) => {
        return (
            <div className="post post-list-sm circle">
                <div className="thumb circle">
                    <Navigate to={`/posts/${post.id}`}>
                        <div className="inner">
                            <img src={post.img} alt={post.title} />
                        </div>
                    </Navigate>
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

    const posts = (type) => {

        axios.get(`/posts/${type}`).then(response => {
            setContents(response.data)
        })

        let posts = contents?.map(content => {
            return post(content);
        });

        return posts;

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
            <div className="post-tabs rounded bordered">
                <ul className="nav nav-tabs nav-pills nav-fill" id="postsTab" role="tablist">
                    <li className="nav-item" role="presentation"><button onClick={() => handleClick("popular")} aria-controls="popular" aria-selected={optionsSelect.popular} className={optionsSelect.popular.className} data-bs-target="#popular" data-bs-toggle="tab" id="popular-tab" role="tab" type="button">Popular</button></li>
                    <li className="nav-item" role="presentation"><button onClick={() => handleClick("recent")} aria-controls="recent" aria-selected={optionsSelect.recent} className={optionsSelect.recent.className} data-bs-target="#recent" data-bs-toggle="tab" id="recent-tab" role="tab" type="button">Recent</button></li>
                </ul>
                <div className="tab-content" id="postsTabContent">
                    <div className="lds-dual-ring"></div>
                    <div aria-labelledby="popular-tab" className={optionsSelect.popular.contentClassName} id="popular" role="tabpanel">
                        {contents ? posts("popular") : null}
                    </div>
                    <div aria-labelledby="recent-tab" className={optionsSelect.recent.contentClassName} id="recent" role="tabpanel">
                        {contents ? posts("recent") : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WidgetPosts;