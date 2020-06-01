import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Do You Even Lift?
        <br />
        <small>You're not overtraining, you're overgaining.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              New Workout
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/history">
              Workout History
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/motivation">
              Funny Gym Quotes
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/advice">
              Advice
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;