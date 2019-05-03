import React from 'react';
import { Button } from 'semantic-ui-react';
import NavBar from '../../shared/NavBar/NavBar';
import './heroView.scss';

const navLinks = [
  {
    link: '/about',
    text: 'About',
  },
  {
    link: '/categories',
    text: 'Categories',
  },
  {
    link: '/login',
    text: 'Login',
  },
  {
    link: '/signup',
    text: 'Signup',
    className: 'active',
  },
];

const HeroView = () => {
  return (
    <div className="heroAll">
      <NavBar navLinks={navLinks} />
      <div className="overlay">
        <div className="siteTexts">
          <h1 className="siteName">Authors Haven</h1>
          <p className="siteTitle">Be part of a solution</p>
          <p className="siteTitle" id="siteTitleSmall">
            A home for bright minds to make their contributions to the world and
            profer solutions
          </p>
          <div>
            <Button primary>Explore</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroView;
