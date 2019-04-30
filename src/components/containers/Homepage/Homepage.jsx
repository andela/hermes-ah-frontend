import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container text>
        <Header as="h2">Welcome to Authors Haven</Header>
      </Container>
    );
  }
}

export default Homepage;
