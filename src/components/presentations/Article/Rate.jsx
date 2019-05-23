/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { Rating, Button, Popup } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Rate extends Component {
  rateHandler = (e, { rating }) => {
    const { articleId, rateArticle } = this.props;

    const data = {
      article_id: articleId,
      rating_value: rating,
    };

    rateArticle(data);
  };

  render() {
    const { comment } = this.props;

    return (
      <div className="rate-article">
        <div className="rate">
          <Rating maxRating={5} onRate={this.rateHandler} size="large" />
        </div>
        <div className="comment">
          <p>
            <i className="far fa-comment" />
          </p>
          <p>{Object.keys(comment).length}</p>
        </div>
        <Popup
          content="Report This Article"
          trigger={
            <div className="popout">
              <label htmlFor="popup">
                <i className="fas fa-ellipsis-v" />
              </label>
            </div>
          }
        />
        <input type="checkbox" id="popup" className="popout-control" />
        <div className="report-article">
          <Button>Report Article</Button>
        </div>
      </div>
    );
  }
}

Rate.defaultProps = {
  comment: [{}],
};

Rate.propTypes = {
  articleId: PropTypes.string.isRequired,
  rateArticle: PropTypes.func.isRequired,
  comment: PropTypes.arrayOf(PropTypes.shape()),
};

export default Rate;
