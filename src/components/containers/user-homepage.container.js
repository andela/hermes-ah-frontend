import { connect } from 'react-redux';
import UserHomepage from '../presentations/UserHomepage/UserHomepage';
import { getAllArticles } from '../../actions/article.actions';

const mapStateToProps = ({ articles, isLoadingReducer }) => ({
  articles,
  isLoadingReducer,
});

const UserHomepageContainer = connect(
  mapStateToProps,
  { getAllArticles }
)(UserHomepage);

export default UserHomepageContainer;
