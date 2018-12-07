import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './images/mash300px.svg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <a href="https://mash.fi">
          <img src={Banner} alt="react-redux-boilerplate - Logo" />
        </a>
        {/* <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
        </div> */}
      </div>
    );
  }
}

export default Header;
