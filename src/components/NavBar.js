import React from 'react';

export default () => {
	return (
		<header className="header-default">
			<nav className="navbar navbar-expand-lg">
				<div className="container-xl">
					<a className="navbar-brand" href="index.html"><img src="images/logo.svg" alt="logo" /></a>

					<div className="collapse navbar-collapse">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className="nav-link" href="/">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/blog">Blog</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/about">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/contact">Contact</a>
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
							<button className="search icon-button">
								<i className="icon-magnifier"></i>
							</button>
							<button className="burger-menu icon-button">
								<span className="burger-icon"></span>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}