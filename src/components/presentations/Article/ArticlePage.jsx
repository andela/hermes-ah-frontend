import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import NavBar from '../../shared/NavBar/NavBar';
import CommentCard from './CommentCard';
import ReadingCard from './reading-article-card';
import './Article.scss';
import Rate from './Rate';

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
                      <Rate />
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <CommentCard />
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
