import { connect } from 'react-redux';
import Homepage from '../presentations/Homepage/Homepage';
import { getAllArticles } from '../../actions/article.actions';

const mapStateToProps = ({ articles, isLoadingReducer }) => ({
  articles,
  isLoadingReducer,
});

const HomePageContainer = connect(
  mapStateToProps,
  { getAllArticles }
)(Homepage);

export default HomePageContainer;
