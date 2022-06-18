import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.scss';
import './assets/css/simple-line-icons.css';
import './assets/css/all.min.css';

import React, { PureComponent, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from "./components/HomePage";
import Blog from "./components/Blog/Blog";
import Categories from "./components/Categories/Categories";
import Authors from "./components/Authors/Authors";
import Footer from './components/Footer';
import SinglePost from './components/Blog/SinglePost';
import CanvasMenu from './components/CanvasMenu';
import SearchPopUp from './components/SearchPopUp';

const App = () => {

  const _redirectToHome = ()  => {
    return <Navigate to="/" />;
  }


  const [canvas, setCanvas] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <Router>
      <div className="site-wrapper">
        <NavBar setCanvas={setCanvas} setSearch={setSearch} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/authors" element={<Authors />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="*" element={<div> Sayfa Bulunamadı </div>} />

          <Route render={_redirectToHome} />
        </Routes>
        <Footer />
      </div>
      <CanvasMenu  isCanvasOpen={canvas} setCanvas={setCanvas} />
      <SearchPopUp  isSearchOpen={search} setSearch={setSearch} />
    </Router >
  );
}

export default App;
