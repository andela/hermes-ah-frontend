import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bookmark extends Component {
  handleBookmark = event => {
    event.preventDefault();
    const { articleId } = this.props;

    const { bookmark } = this.props;
    bookmark(articleId);
  };

  render() {
    return (
      <button type="button" onClick={this.handleBookmark}>
        <i className="far fa-bookmark" />
      </button>
    );
  }
}

Bookmark.propTypes = {
  articleId: PropTypes.string.isRequired,
  bookmark: PropTypes.func.isRequired,
};

export default Bookmark;
