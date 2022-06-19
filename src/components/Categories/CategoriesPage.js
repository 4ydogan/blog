import React, { Component } from 'react'
import Header from '../Header'
import Widget from '../Widget'
import Categories from './Categories'

export default class CategoriesPage extends Component {
    render() {
        return (
            <>
                <Header title={"Categories"} />

                <section className="main-content">
                    <div className="container-xl">
                        <div className="row gy-4">
                            <div className="col-lg-8">

                                <Categories />
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
