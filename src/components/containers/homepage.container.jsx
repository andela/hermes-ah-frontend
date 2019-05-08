import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Homepage from '../presentations/Homepage/Homepage';
import { getAllArticles } from '../../actions/article.actions';

const mapStateToProps = ({ articles, isLoadingReducer }) => ({
  articles,
  isLoadingReducer,
});

class HomePageContainer extends Component {
  componentDidMount = () => {
    const { getAllArticles: articles } = this.props;
    articles();
  };

  render() {
    const { articles, isLoadingReducer } = this.props;
    return <Homepage articles={articles} isLoadingReducer={isLoadingReducer} />;
  }
}

HomePageContainer.propTypes = {
  getAllArticles: PropTypes.func.isRequired,
  articles: PropTypes.shape({}).isRequired,
  isLoadingReducer: PropTypes.shape({}).isRequired,
};

export default connect(
  mapStateToProps,
  { getAllArticles }
)(HomePageContainer);
