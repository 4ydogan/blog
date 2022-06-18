import React, { Component } from 'react'

const CanvasMenu = (props) => {
    return (
        <>
            {props.isCanvasOpen ?
                <div className="canvas-menu d-flex align-items-end flex-column open">
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => props.setCanvas(false)} ></button>

                    <div className="logo">
                        <img src="images/logo.svg" alt="Katen" />
                    </div>

                    <nav>
                        <ul className="vertical-menu">
                            <li className="active">
                                <a href="/">Home</a>
                            </li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/categories">Categories</a></li>
                            <li><a href="/authors">Authors</a></li>
                        </ul>
                    </nav>

                    <ul className="social-icons list-unstyled list-inline mb-0 mt-auto w-100">
                        <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-medium"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>

                : null}
        </>
    )
}
export default CanvasMenu;