import React, {Component} from 'react';
import {Link} from "react-router";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="site-header">
        <div className="site-header__wrapper">
          <div className="site-header__entry">
            <Link className="navbar-brand" to='/create'>
              <img role="presentation" className="site-header__logo" src="images/logo-dark.svg" />
            </Link>
            <div className="toggle-navbar">
              <span className="toggle-navbar__icon toggle-navbar__icon--active"/>
            </div>
          </div>
          <div className="site-header__navbar">
            <nav className="navbar">
              <Link className="navbar__link" activeClassName="navbar__link--active" to='/create'>Create</Link>
              <Link className="navbar__link" activeClassName="navbar__link--active" to='/explore'>Explore</Link>
              <Link className="navbar__link" activeClassName="navbar__link--active" to='/presets'>Presets</Link>
              <Link className="navbar__link" activeClassName="navbar__link--active" to='/export'>Export</Link>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}