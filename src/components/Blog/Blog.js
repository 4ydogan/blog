import React, { Component } from 'react'
import Widget from '../Widget'
import Posts from './Posts'

export default class Blog extends Component {
    render() {
        return (
            <>
                <section class="page-header">
                    <div class="container-xl">
                        <div class="text-center">
                            <h1 class="mt-0 mb-2">Blog</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center mb-0">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Blog</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>

                <section class="main-content">
                    <div class="container-xl">

                        <div class="row gy-4">

                            <div class="col-lg-8">
                                <Posts />
                                <nav>
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item active" aria-current="page">
                                            <span class="page-link">1</span>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    </ul>
                                </nav>

                            </div>
                            <div class="col-lg-4">

                                <Widget />

                            </div>

                        </div>

                    </div>
                </section>
            </>
        )
    }
}
