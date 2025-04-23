import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import propTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TEXTUTILS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" end>{props.about}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" end>Login</NavLink>
            </li>

          </ul>
          

        </div>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="switchCheckDefault" />
          <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark mode</label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  mode: propTypes.string.isRequired,
  toggleMode: propTypes.func.isRequired,
};
