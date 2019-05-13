import React, { Component } from 'react';
import { Grid, Button, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Headercard from '../HeaderCard/Headercard';
import Profilecard from './ProfileCard';
import Reportcard from './ReportedCard';
import SuggestedArticleCard from './SuggestedArticleCard';
import dummyData from '../../../utils/dummyData';

const { suggestedArticle } = dummyData;

class Userprofile extends Component {
  constructor(props) {
    super(props);
    const { isReviewer } = this.props;
    this.state = {
      checked: isReviewer,
    };
  }

  componentDidMount = () => {
    const { getReportedArticle } = this.props;
    getReportedArticle();
  };

  componentDidUpdate = prevProps => {
    const { isReviewer } = this.props;
    if (prevProps.isReviewer !== isReviewer) {
      this.setState({ checked: isReviewer });
    }
  };

  toggle = () => this.setState(prevState => ({ checked: !prevState.checked }));

  render() {
    const { checked } = this.state;
    const { userProfile: userProps, isReviewer, reportedArticles } = this.props;
    const { reportedArticle: profileReports } = reportedArticles;
    const { userProfile } = userProps;
    const { profile } = userProfile;

    const reportList =
      profileReports.length &&
      profileReports
        .slice(0, 3)
        .map(item => (
          <Reportcard
            key={item.id}
            topic={item.reporter_reason}
            reason={item.reporter_comment}
            status={item.status}
          />
        ));

    const suggestedArticleList = suggestedArticle.map(item => (
      <SuggestedArticleCard
        key={item.id}
        title={item.title}
        body={item.body}
        readingTime={item.readingTime}
        firstname={item.firstname}
        lastname={item.lastname}
      />
    ));

    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Headercard icon="fa fa-user" value="Bio" />
              <Profilecard profile={profile} />
              <div>
                <Button onClick={this.toggle}>Become A Reviewer</Button>
                <Checkbox checked={checked} />
              </div>

              {isReviewer ? (
                <div>
                  <Headercard icon="far fa-flag" value="Reported Articles" />
                  <div>{reportList}</div>
                </div>
              ) : null}
            </Grid.Column>

            <Grid.Column width={8}>
              <Headercard icon="fa fa-users" value="Suggested Researchers" />
              <Headercard icon="far fa-newspaper" value="Suggested Articles" />
              {suggestedArticleList}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

Userprofile.propTypes = {
  userProfile: PropTypes.shape().isRequired,
  isReviewer: PropTypes.bool.isRequired,
  getReportedArticle: PropTypes.func.isRequired,
  reportedArticles: PropTypes.shape().isRequired,
};

export default Userprofile;
