import React from 'react';
import {Navbar, Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () => (
  <>
  <div id="nav-top"></div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
  <div className="container">
  <a class="navbar-brand js-scroll-trigger" href="#page-top">VirtuallyPG</a>
  <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav ml-auto">
      <li className="nav-item ml-auto">
        <Link className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" to="/">Home</Link>
      </li>
      <li className="nav-item ml-auto">
        <Link className="nav-link js-scroll-trigger" to="/articles-list">Blog</Link>
      </li>
      <li className="nav-item ml-auto">
        <Link className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</Link>
      </li>
    </ul>
    </div>
    </div>
  </nav>
  </>
)

export default NavBar;
