import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.scss';
import NavBar from '../../shared/NavBar/NavBar';

const Notfound = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
          </div>
          <h2 className="error-title">404 - Page not found</h2>
          <p className="error-message">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link className="home-button" to="/">
            Go to homepage
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Notfound;
