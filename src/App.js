import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.scss';
import './assets/css/simple-line-icons.css';
import './assets/css/all.min.css';

import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from "./components/HomePage";
import Post from "./components/Post";
import Footer from './components/Footer';

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
            <Route path="/posts/:id" component={<Post />} />

            <Route render={this._redirectToHome} />
          </Routes>
          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;
