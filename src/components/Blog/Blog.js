import React, { Component } from 'react'
import Widget from '../Widget'
import Posts from './Posts'

export default class Blog extends Component {
    render() {
        return (
            <>
                <section className="page-header">
                    <div className="container-xl">
                        <div className="text-center">
                            <h1 className="mt-0 mb-2">Blog</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center mb-0">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>

                <section className="main-content">
                    <div className="container-xl">

                        <div className="row gy-4">

                            <div className="col-lg-8">
                                <Posts />
                                <nav>
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item active" aria-current="page">
                                            <span className="page-link">1</span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    </ul>
                                </nav>

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
