import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article/Article';
import './author-articles.scss';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  render() {
    const { articlesUpdate } = this.props;
    const { articles } = articlesUpdate;
    return (
      <div>
        {articles.map(article => (
          <Article
            key={article.id}
            title={article.title}
            date={article.updatedAt}
            isDraft={article.is_draft}
          />
        ))}
      </div>
    );
  }
}

ArticleList.propTypes = {
  articlesUpdate: PropTypes.string.isRequired,
  fetchArticles: PropTypes.func.isRequired,
};

export default ArticleList;
