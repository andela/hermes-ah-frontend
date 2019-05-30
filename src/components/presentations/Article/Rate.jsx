/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { Rating, Button, Popup } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Modal from '../../shared/Modals/Modal';
import removeEmptyString from '../../../utils/removeEmptyString';

class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      reportDetails: {
        reason: '',
        comment: '',
      },
    };
  }

  rateHandler = (e, { rating }) => {
    const { articleId, rateArticle } = this.props;

    const data = {
      article_id: articleId,
      rating_value: rating,
    };

    rateArticle(data);
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  handleReportState = ({ target }) => {
    const { reportDetails } = this.state;
    reportDetails[target.id] = target.value;
    this.setState({ reportDetails });
  };

  reportAnArticle = (e, articleId, reportDetails) => {
    const { reportArticle } = this.props;
    e.preventDefault();
    const data = removeEmptyString(reportDetails);
    reportArticle(articleId, data);
    this.closeModal();
  };

  render() {
    const { likes, articleId } = this.props;
    const { modalOpen, reportDetails } = this.state;

    return (
      <div className="rate-article">
        <Modal
          modalOpen={modalOpen}
          title="Report This Article"
          closeModal={this.closeModal}
          openModal={this.openModal}
        >
          <form
            className="edit-profile-form"
            onSubmit={e => this.reportAnArticle(e, articleId, reportDetails)}
          >
            <label htmlFor="reason">
              <p>Reason:</p>
              <input
                type="text"
                id="reason"
                onChange={e => this.handleReportState(e)}
                placeholder="Title of report"
              />
            </label>
            <label htmlFor="comment">
              <p>Comment:</p>
              <textarea
                type="text"
                id="comment"
                onChange={e => this.handleReportState(e)}
                placeholder="Detailed comment of report"
              />
            </label>
            <div>
              <button type="submit" className="edt-btn">
                Report
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => this.closeModal()}
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
        <div className="rate">
          <Rating maxRating={5} onRate={this.rateHandler} size="large" />
        </div>
        <div className="comment">
          <p>
            <i className="far fa-comment" />
          </p>
          <p>{likes}</p>
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
          <Button onClick={this.openModal}>Report Article</Button>
        </div>
      </div>
    );
  }
}

Rate.defaultProps = {
  likes: 0,
};

Rate.propTypes = {
  articleId: PropTypes.string.isRequired,
  rateArticle: PropTypes.func.isRequired,
  likes: PropTypes.number,
  reportArticle: PropTypes.func.isRequired,
};

export default Rate;
