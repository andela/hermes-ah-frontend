import { connect } from 'react-redux';
import Userprofile from '../presentations/UserProfile/UserProfile';
import reportedArticleAction from '../../actions/reported.actions';
import profileAction from '../../actions/profile.action';

const { updateProfile, getSuggestions } = profileAction;
const { getReportedArticle, requestReview } = reportedArticleAction;

const mapStateToProps = ({ user, reportedArticles, articles }) => ({
  user,
  reportedArticles,
  articles,
});

const UserprofileContainer = connect(
  mapStateToProps,
  { getReportedArticle, updateProfile, getSuggestions, requestReview }
)(Userprofile);

export default UserprofileContainer;
