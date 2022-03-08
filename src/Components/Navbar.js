import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';

// function based component
export default function Navbar(props) {
  return (
    <nav className={"navbar navbar-expand-lg  "+props.navbarStyle.navTheme+" "+props.navbarStyle.background} id="navBar">
        <div className="container-fluid">
          <Link className="navbar-brand" id="brand" to="/" style = {{display: "flex", alignItems: "center",fontSize: "24px"}}>
            <img src="https://avatars.githubusercontent.com/u/3162787?v=4" alt="" width="50" height="50" className="d-inline-block align-text-top"/>
            {props.brandName}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" id="home" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="about" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            <ToggleTheme change={props.changable}/>
          </div>
        </div>
      </nav>
  );
}

// Type checking of props with the help of PropTypes
Navbar.propTypes = {
    brandName: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};

// to set the default value of props
Navbar.defaultProps = {
    brandName: "Brand Name",
    aboutText: "About"
};
