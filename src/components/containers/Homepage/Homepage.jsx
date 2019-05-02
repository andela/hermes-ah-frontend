import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import HeroView from '../../presentations/Hero-view/Heroview-presentations';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Container text>
          <HeroView />
        </Container>
      </React.Fragment>
    );
  }
}

export default Homepage;
