import React, {Component} from 'react';
import {Link} from "react-router";
import './footer.scss';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <Link to='/create'>
              <img className="footer__logo" src="images/logo-light.svg" />
          </Link>
          <div className="footer__credits">
            <p>Build with React, Redux, React Router and Immutable by <a href="https://github.com/dmacompton">Dmacompton</a></p>
          </div>
        </div>
      </footer>
    )
  }
}