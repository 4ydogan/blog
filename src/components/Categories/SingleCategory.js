import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Posts from '../Authors/Posts';
import Header from '../Header';
import Widget from '../Widget';

const SingleCategory = () => {

    const [state, setState] = useState();

    const { category_name } = useParams();

    useEffect(() => {
        setState({ loading: true });
        axios.get(`/categories/${category_name}`).then(response => {
            setState({ category: response.data.category, posts: response.data.posts})
        })
        setState({ loading: false });
    }, [category_name])


    const tags = () => {
        const tags = state.category.tags?.map(element => {
            return <a href="#" className="tag">{element}</a>
        });
    }

    return (state?.category === undefined ? null :
        <>
            <Header title={state.category.name} />

            <section className="main-content">
                <div className="container-xl">

                    <div className="row gy-4">

                        <div className="col-lg-8">
                            <Posts posts={state.posts} />
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

export default SingleCategory;