import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article/Article';
import './author-articles.scss';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  show = async e => {
    const { editAnArticle } = this.props;
    console.log(editAnArticle);
    const { id } = e.target;
    // console.log(e.target.id, 'anayo');
    await editAnArticle(id);
  };

  render() {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const { articlesUpdate } = this.props;
    const { articles } = articlesUpdate;
    return (
      <div className="article-container">
        {articles.map(article => {
          const updateDate = new Date(article.updatedAt);
          const updateMonth = monthNames[updateDate.getMonth()];
          const updateDay = updateDate.getDate();
          const updateYear = updateDate.getFullYear();
          return (
            <Article
              key={article.id}
              title={article.title}
              date={`Updated ${updateDay} ${updateMonth} ${updateYear}`}
              isDraft={article.is_draft}
              articleId={article.id}
              onClick={this.show}
            />
          );
        })}
      </div>
    );
  }
}

ArticleList.propTypes = {
  articlesUpdate: PropTypes.shape({
    articles: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      isDraft: PropTypes.bool,
    }),
  }).isRequired,
  editAnArticle: PropTypes.func.isRequired,
};

export default ArticleList;
