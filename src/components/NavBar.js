import axios from 'axios';
import React, { Component } from 'react';

export default class NavBar extends Component {

	state = {};

	async componentDidMount() {
        this.setState({ loading: true });
        const logo = await axios.get(`/images/logo`);
        this.setState({ logo: logo.data });
        this.setState({ loading: false });
    }

	render() {

		const props = this.props;
		const state = this.state;
		return (
			<>

				<header className="header-default">
					<nav className="navbar navbar-expand-lg">
						<div className="container-xl">
							{state?.logo ? <a className="navbar-brand" href="/"><img src={state.logo.image} alt="logo" style={{width: "200px"}}/></a> : null}

							<div className="collapse navbar-collapse">
								<ul className="navbar-nav mr-auto">
									<li className="nav-item">
										<a className="nav-link" href="/">Home</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="/blog">Blog</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="/categories">Categories</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="/authors">Authors</a>
									</li>
								</ul>
							</div>

							<div className="header-right">
								<ul className="social-icons list-unstyled list-inline mb-0">
									<li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-medium"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
								</ul>
								<div className="header-buttons">
									<button className="search icon-button" onClick={() => props.setSearch(true)}>
										<i className="icon-magnifier"></i>
									</button>
									<button className="burger-menu icon-button" onClick={() => props.setCanvas(true)}>
										<span className="burger-icon"></span>
									</button>
								</div>
							</div>
						</div>
					</nav>
				</header>
			</>
		)
	}
}