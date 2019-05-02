import React from 'react';
import { Button } from 'semantic-ui-react';
import './heroView.scss';

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
            <Button primary>Explore</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroView;
