/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminTab from '../AdminTab/AdminTab';
import RequestList from '../ReviewerRequests/Requests/Requests';
import NavBar from '../../shared/NavBar/NavBar';
import ReviewedArticles from '../ReviewedArticles/ReviewedArticles';
import ReportedArticles from './ReportedArticles';
import Modal from '../../shared/Modals/Modal';
import './admin.scss';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'request-section',
      modalOpen: false,
      articleId: '',
      adminComment: {
        admin_comment: '',
        status: 'accept',
      },
    };
  }

  componentDidMount = () => {
    const { getUserRequests, getReportedArticle } = this.props;
    getUserRequests();
    getReportedArticle();
  };

  adminAcceptRequest = async id => {
    const { acceptRequest } = this.props;
    await acceptRequest(id);
  };

  adminRejectRequest = async id => {
    const { rejectRequest } = this.props;
    await rejectRequest(id);
  };

  changeTab = tab => {
    this.setState({ currentTab: tab });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  openModal = articleId => {
    this.setState({ modalOpen: true, articleId });
  };

  handleComment = ({ target }) => {
    const { adminComment } = this.state;
    adminComment[target.id] = target.value;
    this.setState({ adminComment });
  };

  submitComment = async (e, id, data) => {
    const { changeReportStatus, getReportedArticle } = this.props;
    e.preventDefault();
    await changeReportStatus(id, data);
    getReportedArticle();
    this.closeModal();
  };

  render() {
    const { currentTab, modalOpen, articleId, adminComment } = this.state;
    const {
      userRequests,
      reportedArticle,
      getReportedArticle,
      reviewArticle,
    } = this.props;
    const { userRequests: allUserRequests } = userRequests;
    return (
      <React.Fragment>
        <NavBar />
        <AdminTab changeTab={this.changeTab} currentTab={currentTab} />
        <div className="admin-content">
          {currentTab === 'request-section' ? (
            <RequestList
              userRequests={allUserRequests}
              adminAcceptRequest={this.adminAcceptRequest}
              adminRejectRequest={this.adminRejectRequest}
            />
          ) : null}
          {currentTab === 'article-section' ? (
            <ReviewedArticles
              reportedArticle={reportedArticle}
              openModal={this.openModal}
            />
          ) : null}
          {currentTab === 'reported-section' ? (
            <ReportedArticles
              reportedArticle={reportedArticle}
              getReportedArticle={getReportedArticle}
              reviewArticle={reviewArticle}
            />
          ) : null}
        </div>
        {reportedArticle ? (
          <Modal
            modalOpen={modalOpen}
            closeModal={this.closeModal}
            title="Review This Reported Article"
          >
            <form
              className="edit-profile-form"
              onSubmit={e => this.submitComment(e, articleId, adminComment)}
            >
              <label htmlFor="comment">
                <p>Comment</p>
                <textarea
                  type="text"
                  id="admin_comment"
                  onChange={this.handleComment}
                />
              </label>
              <label htmlFor="status">
                <p>Select Status</p>
                <select id="status" onChange={this.handleComment}>
                  <option value="" selected>
                    Select a status
                  </option>
                  <option value="accepted">Accept</option>
                  <option value="rejected">Reject</option>
                </select>
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
        ) : null}
      </React.Fragment>
    );
  }
}
AdminPage.defaultProps = {
  userRequests: {},
  reportedArticle: [],
};
AdminPage.propTypes = {
  getUserRequests: PropTypes.func.isRequired,
  getReportedArticle: PropTypes.func.isRequired,
  reportedArticle: PropTypes.arrayOf(PropTypes.shape),
  userRequests: PropTypes.shape(),
  acceptRequest: PropTypes.func.isRequired,
  rejectRequest: PropTypes.func.isRequired,
  reviewArticle: PropTypes.func.isRequired,
  changeReportStatus: PropTypes.func.isRequired,
};

export default AdminPage;
