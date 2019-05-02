import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import HeroView from '../../presentations/Hero-view/Heroview-presentations';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container text>
        <Header as="h2">Welcome to Authors Haven</Header>
        <HeroView />
      </Container>
    );
  }
}

export default Homepage;
