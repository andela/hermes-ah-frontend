import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './hero-view.scss';

const HeroView = () => {
  return (
    <div className="heroAll">
      <div className="overlay">
        <div className="siteTexts">
          <h1 className="siteName">Authors Haven</h1>
          <p className="siteTitle">Be part of a solution</p>
          <p className="siteTitle" id="siteTitleSmall">
            A home for bright minds to make their contributions to the world and
            profer solutions
          </p>
          <div>
            <Link to="login">
              <Button primary>Explore</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroView;
