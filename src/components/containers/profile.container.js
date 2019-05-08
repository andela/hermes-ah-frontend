import { connect } from 'react-redux';
import Profilepage from '../presentations/Profilepage/Profilepage';
import profileAction from '../../actions/profile.actions';
import fetchArticles from '../../actions/articles-update.actions';

const { getProfile } = profileAction;

const mapStateToProps = ({ userProfile, articlesUpdate }) => ({
  userProfile,
  articlesUpdate,
});

const ProfilepageContainer = connect(
  mapStateToProps,
  { getProfile, fetchArticles }
)(Profilepage);

export default ProfilepageContainer;
