import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import NavBar from '../../shared/NavBar/NavBar';
import ReadingCard from './reading-article-card';
import './Article.scss';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="article-page">
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column computer={2} mobile={16}>
                <div className="section">Social Section</div>
              </Grid.Column>
              <Grid.Column computer={10} mobile={16}>
                <Grid.Row>
                  <Grid.Column>
                    <div className="section">
                      <ReadingCard />
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <div className="section">Comment Section</div>
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column computer={4} mobile={16}>
                <div className="section">Related article section</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default ArticlePage;
