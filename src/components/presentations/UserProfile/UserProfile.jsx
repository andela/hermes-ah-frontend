import React, { Component } from 'react';
import { Grid, Button, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Headercard from '../HeaderCard/Headercard';
import Profilecard from './ProfileCard';
import Reportcard from './ReportedCard';
import SuggestedArticleCard from './SuggestedArticleCard';
import dummyData from '../../../utils/dummyData';

const { profileReport } = dummyData;

class Userprofile extends Component {
  constructor(props) {
    super(props);
    const { isReviewer } = this.props;
    this.state = {
      checked: isReviewer,
    };
  }

  componentDidUpdate = prevProps => {
    const { isReviewer } = this.props;
    if (prevProps.isReviewer !== isReviewer) {
      this.setState({ checked: isReviewer });
    }
  };

  toggle = () => this.setState(prevState => ({ checked: !prevState.checked }));

  render() {
    const { checked } = this.state;
    const {
      userProfile: userProps,
      isReviewer,
      updateProfile,
      articles,
    } = this.props;
    const { userProfile } = userProps;
    const { profile } = userProfile;
    const { articleData } = articles;

    const suggestionList = articleData.filter(item => {
      return item.user_id !== profile.id;
    });

    const reportList = profileReport.map(item => (
      <Reportcard
        key={item.id}
        topic={item.title}
        reason={item.reason}
        status={item.status}
      />
    ));

    const suggestedArticleList = suggestionList
      .map(item => (
        <SuggestedArticleCard
          key={item.id}
          title={item.title}
          body={item.abstract}
          readingTime={item.reading_time}
          firstname={item.author.first_name}
          lastname={item.author.last_name}
        />
      ))
      .slice(0, 3);

    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Headercard icon="fa fa-user" value="Bio" />
              <Profilecard profile={profile} updateProfile={updateProfile} />
              <div>
                <Button onClick={this.toggle}>Become A Reviewer</Button>
                <Checkbox onChange={this.toggle} checked={checked} />
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
  articles: PropTypes.shape().isRequired,
  isReviewer: PropTypes.bool.isRequired,
  updateProfile: PropTypes.func.isRequired,
};

export default Userprofile;
