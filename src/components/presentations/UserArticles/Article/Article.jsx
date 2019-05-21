import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import '../author-articles.scss';

class Article extends Component {
  state = { open: false };

  show = size => () => this.setState({ size, open: true });

  close = () => this.setState({ open: false });

  render() {
    // <Button onClick={this.show('mini')}>Mini</Button>
    // <Button onClick={this.show('tiny')}>Tiny</Button>
    // <Button onClick={this.show('small')}>Small</Button>
    // <Button onClick={this.show('large')}>Large</Button>
    // <Button onClick={this.show('fullscreen')}>Fullscreen</Button>
    const { open, size } = this.state;

    const { title, date, isDraft, articleId, buttonEvent } = this.props;
    let draftStatus;
    if (!isDraft) {
      draftStatus = 'unpublish';
    } else {
      draftStatus = 'publish';
    }
    return (
      <React.Fragment>
        {open && (
          <Modal
            size={size}
            open={open}
            close={this.close}
            buttonEvent={buttonEvent}
            articleId={articleId}
          />
        )}
        <div className="profile-article-list">
          <div className="article-list">
            <h3>{title}</h3>
            <p>{date}</p>
          </div>
          <div className="update-buttons">
            <Button className="success">Edit</Button>
            <Button className={draftStatus}>{draftStatus}</Button>
            <Button
              type="submit"
              className="failure"
              onClick={this.show('mini')}
            >
              Delete
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isDraft: PropTypes.bool.isRequired,
  buttonEvent: PropTypes.func.isRequired,
  articleId: PropTypes.string.isRequired,
};

export default Article;
