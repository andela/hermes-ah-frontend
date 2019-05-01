import React from 'react';
import { Container } from 'semantic-ui-react';

import bookImage from './books.jpg';
import './heroView.scss';

const HeroView = () => {
  return (
    <Container>
      <div className="heroAll">
        <div className="siteTexts">
          <h1 className="siteName">Authors Haven</h1>
          <p className="siteTitle">Be part of a solution</p>
          <p className="siteTitle" id="siteTitleSmall">
            A home for bright minds to make their contributions to the world and
            profer solutions
          </p>
        </div>
        <img alt="bookimage" className="heroImage" src={bookImage} />
      </div>
    </Container>
  );
};

export default HeroView;
