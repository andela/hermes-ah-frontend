import { connect } from 'react-redux';
import UserHomepage from '../presentations/UserHomepage/UserHomepage';
import { getAllArticles } from '../../actions/article.actions';
import { likeArticle } from '../../actions/like.actions';

const mapStateToProps = ({ articles, isLoadingReducer }) => ({
  articles,
  isLoadingReducer,
});

const UserHomepageContainer = connect(
  mapStateToProps,
  { getAllArticles, likeArticle }
)(UserHomepage);

export default UserHomepageContainer;
