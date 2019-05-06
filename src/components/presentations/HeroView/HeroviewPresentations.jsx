import React from 'react';
import { Button } from 'semantic-ui-react';
import './hero-view.scss';
// import './heroView.scss';
import NavBar from '../../shared/NavBar/NavBar';
import navLinks from '../../../utils/headers';

const HeroView = () => {
  return (
    <React.Fragment>
      <NavBar navLinks={navLinks.homepage} />
      <div className="heroAll">
        <div className="overlay">
          <div className="siteTexts">
            <h1 className="siteName">Authors Haven</h1>
            <p className="siteTitle">Be part of a solution</p>
            <p className="siteTitle" id="siteTitleSmall">
              A home for bright minds to make their contributions to the world
              profer solutions
            </p>
            <div>
              <Button primary>Explore</Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroView;
