import axios from 'axios';
import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import Widget from '../Widget';

export default class SinglePost extends Component {

    state = {};

    params = { id: 1 };

    async componentDidMount() {
        this.setState({ loading: true });
        const response = await axios.get(`/post/${this.params.id}`);
        const author = await axios.get(`/author/1`);
        this.setState({ post: response.data, author: author.data });
        this.setState({ loading: false });
    }

    render() {

        const postContent = this.state.post;
        const author = this.state.author;

        console.log(postContent);

        const tags = () => {
            const tags = postContent.tags?.map(element => {
                return <a href="#" className="tag">{element}</a>
            });
        }

        const Post = () => {
            return (postContent === undefined || author === undefined ? null :
                <>
                    <div className="post post-single">
                        <div className="post-header">
                            <h1 className="title mt-0 mb-3">{postContent.title}</h1>
                            <ul className="meta list-inline mb-0">
                                <li className="list-inline-item"><a href={`/author/${author.id}`}><img src={author.images} className="author" alt={author.name} />{author.name}</a></li>
                                <li className="list-inline-item"><a href={`/category/${postContent.category}`}>{postContent.category}</a></li>
                                <li className="list-inline-item">{postContent.date}</li>
                            </ul>
                        </div>
                        <div className="featured-image">
                            <img src={postContent.images} alt="post-title" />
                        </div>
                        <div className="post-content clearfix">
                            {postContent.content}
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

        return (postContent === undefined || author === undefined ? null :
            <>
                <section class="main-content mt-3">
                    <div class="container-xl">

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item"><a href={`/category/${postContent.category}`}>{postContent.category}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{postContent.title}</li>
                            </ol>
                        </nav>

                        <div class="row gy-4">

                            <div class="col-lg-8">
                                {this.state.loading ? null : Post()}

                                <div class="spacer" data-height="50"></div>

                                <div className="about-author padding-30 rounded">
                                    <div className="thumb">
                                        <img src={author.images} alt={author.name} />
                                    </div>
                                    <div className="details">
                                        <h4 className="name"><a href={`/author/${author.id}`}>{author.name}</a></h4>
                                        <p>Hello, I’m a content writer who is fascinated by content fashion, celebrity and lifestyle. She helps clients bring the right content to the right people.</p>
                                        <ul className="social-icons list-unstyled list-inline mb-0">
                                            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fab fa-medium"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <br />

                                <div class="section-header">
                                    <h3 class="section-title">Comments (3)</h3>
                                    <img src="images/wave.svg" class="wave" alt="wave" />
                                </div>
                                <div class="comments bordered padding-30 rounded">

                                    <ul class="comments">
                                        <li class="comment rounded">
                                            <div class="thumb">
                                                <img src="images/other/comment-1.png" alt="John Doe" />
                                            </div>
                                            <div class="details">
                                                <h4 class="name"><a href="#">John Doe</a></h4>
                                                <span class="date">Jan 08, 2021 14:41 pm</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae odio ut tortor fringilla cursus sed quis odio.</p>
                                                <a href="#" class="btn btn-default btn-sm">Reply</a>
                                            </div>
                                        </li>
                                        <li class="comment child rounded">
                                            <div class="thumb">
                                                <img src="images/other/comment-2.png" alt="John Doe" />
                                            </div>
                                            <div class="details">
                                                <h4 class="name"><a href="#">Helen Doe</a></h4>
                                                <span class="date">Jan 08, 2021 14:41 pm</span>
                                                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                                                <a href="#" class="btn btn-default btn-sm">Reply</a>
                                            </div>
                                        </li>
                                        <li class="comment rounded">
                                            <div class="thumb">
                                                <img src="images/other/comment-3.png" alt="John Doe" />
                                            </div>
                                            <div class="details">
                                                <h4 class="name"><a href="#">Anna Doe</a></h4>
                                                <span class="date">Jan 08, 2021 14:41 pm</span>
                                                <p>Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                                                <a href="#" class="btn btn-default btn-sm">Reply</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="spacer" data-height="50"></div>

                                <div class="section-header">
                                    <h3 class="section-title">Leave Comment</h3>
                                    <img src="images/wave.svg" class="wave" alt="wave" />
                                </div>
                                <div class="comment-form rounded bordered padding-30">

                                    <form id="comment-form" class="comment-form" method="post">

                                        <div class="messages"></div>

                                        <div class="row">

                                            <div class="column col-md-12">
                                                <div class="form-group">
                                                    <textarea name="InputComment" id="InputComment" class="form-control" rows="4" placeholder="Your comment here..." required="required"></textarea>
                                                </div>
                                            </div>

                                            <div class="column col-md-6">
                                                <div class="form-group">
                                                </div>
                                            </div>

                                            <div class="column col-md-6">
                                                <div class="form-group">
                                                </div>
                                            </div>

                                            <div class="column col-md-12">
                                                <div class="form-group">
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
}
