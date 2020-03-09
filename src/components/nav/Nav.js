import React from "react";
import { withRouter, Link } from "react-router-dom";
import './Nav.css'

const NavBar = props => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/articles">
              Articles
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/events">
              Events
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/messages">
              Messages
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/friends">
              Friends
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
