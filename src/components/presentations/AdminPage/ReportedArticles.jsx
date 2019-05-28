import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Reportedcard from '../UserProfile/ReportedCard';
import Modal from '../../shared/Modals/Modal';

class ReportedArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      reviewerComment: {
        reviewer_comment: '',
      },
      reportedArticleId: null,
      reportid: null,
    };
  }

  handleComment = ({ target }) => {
    const { reviewerComment } = this.state;
    reviewerComment[target.id] = target.value;
    this.setState({ reviewerComment });
  };

  submitComment = async (e, id, data, reportid) => {
    const { reviewArticle } = this.props;
    e.preventDefault();
    await reviewArticle(id, data, reportid);
    this.closeModal();
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  openModal = (id, reportid) => {
    this.setState({ modalOpen: true, reportedArticleId: id, reportid });
  };

  render() {
    const {
      modalOpen,
      reviewerComment,
      reportedArticleId,
      reportid,
    } = this.state;
    const { reportedArticle } = this.props;
    const allPendingReportedArticles = reportedArticle.filter(
      item => item.status === 'pending'
    );
    return (
      <div className="main-grid">
        <Modal
          modalOpen={modalOpen}
          title="Review This Article"
          closeModal={this.closeModal}
          openModal={this.openModal}
        >
          <form
            className="edit-profile-form"
            onSubmit={e =>
              this.submitComment(
                e,
                reportedArticleId,
                reviewerComment,
                reportid
              )
            }
          >
            <label htmlFor="comment">
              <p>Comment</p>
              <textarea
                type="text"
                id="reviewer_comment"
                onChange={e => this.handleComment(e)}
              />
            </label>
            <div>
              <button type="submit" className="edt-btn">
                Review
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={this.closeModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
        {allPendingReportedArticles.map(item => (
          <Reportedcard
            key={item.id}
            topic={item.reporter_reason}
            reason={item.reporter_comment}
            title={item.article.title}
            status={item.status}
            articleId={item.reported_article_id}
            openReview={() => this.openModal(item.reported_article_id, item.id)}
          />
        ))}
      </div>
    );
  }
}

ReportedArticles.defaultProps = {
  reportedArticle: [],
};

ReportedArticles.propTypes = {
  reportedArticle: PropTypes.arrayOf(PropTypes.shape()),
  reviewArticle: PropTypes.func.isRequired,
};

export default ReportedArticles;
