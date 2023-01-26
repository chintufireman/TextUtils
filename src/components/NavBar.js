import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/*  <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">
              Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

/* now suppose someone passes a number or other objects 
in the props instead of string then it will give error on console
like example if someone passes a number in title the it will 

give this error =>
Failed prop type: Invalid prop `title` of type `number` supplied 
to `NavBar`, expected `string`.

and if u use isRequired without creating defaultProps then it 
will throw error
*/

NavBar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here",
};
/* this is actually default props if no one sends any
props then this will be default value */
