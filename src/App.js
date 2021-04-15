import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <>
      <div id="page-top">      </div>


      <Router>
        <NavBar />
        <div id="page-body" className = "mt-5">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/portfolio" component={AboutPage} exact />
            <Route path="/articles-list" component={ArticlesListPage} exact />
            <Route path="/article/:name" component={ArticlePage} exact />
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </Router>
      </>
    );
  }
}

export default App;
