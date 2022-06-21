import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Widget from '../Widget';

const SinglePost = () => {

    const [state, setState] = useState();

    const { id } = useParams();

    useEffect(() => {
        setState({ loading: true });
        axios.get(`/post/${id}`).then(response => {
            axios.get(`/authors/${response.data.author_id}`)
                .then(author => axios.get(`/categories/${response.data.category_id}`)
                    .then(category => setState({ post: response.data, author: author.data.author, category: category.data.category }))
                );
        })
        setState({ loading: false });
    }, [id])


    const tags = () => {
        const tags = state.post.tags?.map(element => {
            return <a href="#" className="tag">{element}</a>
        });
    }

    const Post = () => {
        return (state.post === undefined || state.category === undefined || state.author === undefined ? null :
            <>
                <div className="post post-single">
                    <div className="post-header">
                        <h1 className="title mt-0 mb-3">{state.post.title}</h1>
                        <ul className="meta list-inline mb-0">
                            <li className="list-inline-item"><a href={`/authors/${state.author.id}`}><img src={state.author.image} className="author" alt={state.author.name} />{state.author.name}</a></li>
                            <li className="list-inline-item"><a href={`/categories/${state.post.category_id}`}>{state.category.name}</a></li>
                            <li className="list-inline-item">{state.post.date}</li>
                        </ul>
                    </div>
                    <div className="featured-image">
                        <img src={state.post.images} alt="post-title" />
                    </div>
                    <div className="post-content clearfix">
                        {state.post.content}
                    </div>
                    <div className="post-bottom">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 col-12 text-center text-md-start">
                                {tags()}
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }

    return (state?.post === undefined || state?.author === undefined ? null :
        <>
            <section className="main-content mt-3">
                <div className="container-xl">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href={`/categories/${state.category.id}`}>{state.category.name}</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{state.post.title}</li>
                        </ol>
                    </nav>

                    <div className="row gy-4">

                        <div className="col-lg-8">
                            {state.loading ? null : Post()}

                            <div className="spacer" data-height="50"></div>

                            <div className="about-author padding-30 rounded">
                                <div className="thumb">
                                    <img src={state.author.image} alt={state.author.name} />
                                </div>
                                <div className="details">
                                    <h4 className="name"><a href={`/authors/${state.author.id}`}>{state.author.name}</a></h4>
                                    <p>Hello, I’m a content writer who is fascinated by content fashion, celebrity and lifestyle. She helps clients bring the right content to the right people.</p>
                                    <ul className="social-icons list-unstyled list-inline mb-0">
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-medium"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <br />

                            <div className="section-header">
                                <h3 className="section-title">Comments (3)</h3>
                                <img src="images/wave.svg" className="wave" alt="wave" />
                            </div>
                            <div className="comments bordered padding-30 rounded">

                                <ul className="comments">
                                    <li className="comment rounded">
                                        <div className="thumb">
                                            <img src="images/other/comment-1.png" alt="John Doe" />
                                        </div>
                                        <div className="details">
                                            <h4 className="name"><a href="#">John Doe</a></h4>
                                            <span className="date">Jan 08, 2021 14:41 pm</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae odio ut tortor fringilla cursus sed quis odio.</p>
                                            <a href="#" className="btn btn-default btn-sm">Reply</a>
                                        </div>
                                    </li>
                                    <li className="comment child rounded">
                                        <div className="thumb">
                                            <img src="images/other/comment-2.png" alt="John Doe" />
                                        </div>
                                        <div className="details">
                                            <h4 className="name"><a href="#">Helen Doe</a></h4>
                                            <span className="date">Jan 08, 2021 14:41 pm</span>
                                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                                            <a href="#" className="btn btn-default btn-sm">Reply</a>
                                        </div>
                                    </li>
                                    <li className="comment rounded">
                                        <div className="thumb">
                                            <img src="images/other/comment-3.png" alt="John Doe" />
                                        </div>
                                        <div className="details">
                                            <h4 className="name"><a href="#">Anna Doe</a></h4>
                                            <span className="date">Jan 08, 2021 14:41 pm</span>
                                            <p>Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                                            <a href="#" className="btn btn-default btn-sm">Reply</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="spacer" data-height="50"></div>

                            <div className="section-header">
                                <h3 className="section-title">Leave Comment</h3>
                                <img src="images/wave.svg" className="wave" alt="wave" />
                            </div>
                            <div className="comment-form rounded bordered padding-30">

                                <form id="comment-form" className="comment-form" method="post">

                                    <div className="messages"></div>

                                    <div className="row">

                                        <div className="column col-md-12">
                                            <div className="form-group">
                                                <textarea name="InputComment" id="InputComment" className="form-control" rows="4" placeholder="Your comment here..." required="required"></textarea>
                                            </div>
                                        </div>

                                        <div className="column col-md-6">
                                            <div className="form-group">
                                            </div>
                                        </div>

                                        <div className="column col-md-6">
                                            <div className="form-group">
                                            </div>
                                        </div>

                                        <div className="column col-md-12">
                                            <div className="form-group">
                                            </div>
                                        </div>

                                    </div>


                                </form>
                            </div>
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

export default SinglePost;