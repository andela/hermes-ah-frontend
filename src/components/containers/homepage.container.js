import { connect } from 'react-redux';
import Homepage from '../presentations/Homepage/Homepage';
import { getAllArticles } from '../../actions/article.actions';
import { confirmAccount } from '../../actions/auth.actions';

const mapStateToProps = ({ articles, isLoadingReducer }) => ({
  articles,
  isLoadingReducer,
});

const HomePageContainer = connect(
  mapStateToProps,
  { getAllArticles, confirmAccount }
)(Homepage);

export default HomePageContainer;
