import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.scss';
import './assets/css/simple-line-icons.css';
import './assets/css/all.min.css';

import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from "./components/HomePage";
import Blog from "./components/Blog/Blog";
import Footer from './components/Footer';
import SinglePost from './components/Blog/SinglePost';

class App extends PureComponent {
  _redirectToHome() {
    return <Navigate to="/" />;
  }

  render() {

    return (
      <Router>
        <div className="site-wrapper">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route path="/posts/:id" element={<SinglePost />} />

            <Route render={this._redirectToHome} />
          </Routes>
          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;
