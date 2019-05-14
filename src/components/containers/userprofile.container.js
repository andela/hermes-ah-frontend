import { connect } from 'react-redux';
import Userprofile from '../presentations/UserProfile/UserProfile';
import reportedArticleAction from '../../actions/reported.actions';
import profileAction from '../../actions/profile.action';

const { updateProfile } = profileAction;

const { getReportedArticle } = reportedArticleAction;

const mapStateToProps = ({ userProfile, reportedArticles, articles }) => ({
  userProfile,
  reportedArticles,
  articles,
});

const UserprofileContainer = connect(
  mapStateToProps,
  { getReportedArticle, updateProfile }
)(Userprofile);

export default UserprofileContainer;
