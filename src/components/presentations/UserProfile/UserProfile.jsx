import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Headercard from '../HeaderCard/Headercard';
import Profilecard from './ProfileCard';
import Reportcard from './ReportedCard';
import SuggestedArticleCard from './SuggestedArticleCard';
import SuggestedResearchers from './SuggestedResearchers';

class Userprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResearchers: false,
    };
  }

  componentDidMount = () => {
    const { getReportedArticle } = this.props;
    getReportedArticle();
  };

  toggle = () => {
    const { requestReview } = this.props;
    requestReview();
  };

  showResearchers = () =>
    this.setState(prevState => ({
      showResearchers: !prevState.showResearchers,
    }));

  render() {
    const { showResearchers } = this.state;
    const {
      user,
      isReviewer,
      reportedArticles,
      updateProfile,
      articles,
    } = this.props;
    const { reportedArticle: profileReports } = reportedArticles;
    const { userProfile, suggestedResearchers: allSuggestedResearchers } = user;
    const { profile } = userProfile;
    const { articleData } = articles;

    const suggestionList = articleData.filter(item => {
      return item.user_id !== profile.id;
    });

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

    const suggestedArticleList = suggestionList
      .slice(0, 3)
      .map(item => (
        <SuggestedArticleCard
          key={item.id}
          title={item.title}
          body={item.abstract}
          readingTime={item.reading_time}
          firstname={item.author.first_name}
          lastname={item.author.last_name}
        />
      ));

    const suggestedResearchers = allSuggestedResearchers.filter(
      researcher => !researcher.isFollowing
    );

    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column computer={8} mobile={16}>
              <Headercard icon="fa fa-user" value="Bio" />
              <Profilecard profile={profile} updateProfile={updateProfile} />
              <hr />

              {isReviewer ? (
                <div>
                  <Headercard icon="far fa-flag" value="Reported Articles" />
                  <div>{reportList}</div>
                  <div>
                    <p className="small-text">
                      You can see reported articles because you are a reviewer
                    </p>
                    <Button onClick={this.toggle}>Remove from Reviewers</Button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="small-text">
                    Become a reviewer and review reported articles.
                  </p>
                  <div>
                    <Button onClick={this.toggle}>Become A Reviewer</Button>
                  </div>
                </div>
              )}
            </Grid.Column>

            <Grid.Column computer={8} mobile={16}>
              <Headercard icon="far fa-newspaper" value="Suggested Articles" />
              {suggestedArticleList}

              <Headercard
                icon="fa fa-users"
                value="Suggested Researchers"
                clickFunc={this.showResearchers}
                pointer="pointer"
              />
              {showResearchers ? (
                <div className="sgg-rsh-container">
                  <SuggestedResearchers
                    suggestedResearchers={suggestedResearchers}
                  />
                </div>
              ) : null}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

Userprofile.defaultProps = {
  isReviewer: false,
};

Userprofile.propTypes = {
  user: PropTypes.shape({
    userProfile: PropTypes.shape({}),
    suggestedResearchers: PropTypes.array,
  }).isRequired,
  articles: PropTypes.shape({
    articleData: PropTypes.array,
  }).isRequired,
  isReviewer: PropTypes.bool,
  getReportedArticle: PropTypes.func.isRequired,
  reportedArticles: PropTypes.objectOf(PropTypes.array).isRequired,
  updateProfile: PropTypes.func.isRequired,
  requestReview: PropTypes.func.isRequired,
};

export default Userprofile;
