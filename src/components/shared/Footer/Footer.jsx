import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

/**
 * @description Footer - Authors Haven footer component
 * @returns {JSX} - JSX component
 */
const Footer = () => (
  <footer>
    <div className="list-items">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
        <li>
          <Link to="/policy">Policy</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
        <li>
          <Link to="/terms"> Terms</Link>
        </li>
      </ul>
    </div>
    <div className="copyright">
      <p>
        Copyright &copy; &nbsp;
        {new Date().getFullYear()}
        &nbsp;Authors Haven
      </p>
    </div>
  </footer>
);
export default Footer;
