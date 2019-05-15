import { connect } from 'react-redux';
import Userprofile from '../presentations/UserProfile/UserProfile';
import reportedArticleAction from '../../actions/reported.actions';
import profileAction from '../../actions/profile.action';

const { updateProfile } = profileAction;
const { getReportedArticle, requestReview } = reportedArticleAction;

const mapStateToProps = ({ userProfile, reportedArticles, articles }) => ({
  userProfile,
  reportedArticles,
  articles,
});

const UserprofileContainer = connect(
  mapStateToProps,
  { getReportedArticle, updateProfile, requestReview }
)(Userprofile);

export default UserprofileContainer;
