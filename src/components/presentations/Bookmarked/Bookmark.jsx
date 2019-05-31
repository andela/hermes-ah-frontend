import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './bookmark.scss';

class Bookmark extends Component {
  handleBookmark = event => {
    event.preventDefault();
    const { articleId } = this.props;

    const { bookmark } = this.props;
    bookmark(articleId);
  };

  render() {
    return (
      <div className="bookmark">
        <button type="button" onClick={this.handleBookmark}>
          <i className="fas fa-bookmark" />
        </button>
      </div>
    );
  }
}

Bookmark.propTypes = {
  articleId: PropTypes.string.isRequired,
  bookmark: PropTypes.func.isRequired,
};

export default Bookmark;
