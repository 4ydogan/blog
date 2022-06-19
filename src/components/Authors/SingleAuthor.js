import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header';
import Widget from '../Widget';
import Posts from './Posts';

const SingleAuthor = () => {

    const [state, setState] = useState();

    const { id } = useParams();

    useEffect(() => {
        setState({ loading: true });
        axios.get(`/author/${id}`).then(response => {
            setState({ author: response.data })
        })
        setState({ loading: false });
    }, [id])


    const tags = () => {
        const tags = state.author.tags?.map(element => {
            return <a href="#" className="tag">{element}</a>
        });
    }

    return (state?.author === undefined ? null :
        <>
            <Header title={state.author.name} />

            <section className="main-content">
                <div className="container-xl">

                    <div className="row gy-4">

                        <div className="col-lg-8">
                            <Posts authorID={state.author.id} />
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

export default SingleAuthor;