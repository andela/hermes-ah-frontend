import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminTab from '../AdminTab/AdminTab';
import RequestList from '../ReviewerRequests/Requests/Requests';
import NavBar from '../../shared/NavBar/NavBar';
import ReviewedArticles from '../ReviewedArticles/ReviewedArticles';
import ReportedArticles from './ReportedArticles';
import './admin.scss';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'request-section',
    };
  }

  componentDidMount = () => {
    const { getUserRequests, getReportedArticle } = this.props;
    getUserRequests();
    getReportedArticle();
  };

  changeTab = tab => {
    this.setState({ currentTab: tab });
  };

  render() {
    const { currentTab } = this.state;
    const { userRequests, reportedArticle } = this.props;
    const { userRequests: allUserRequests } = userRequests;
    return (
      <React.Fragment>
        <NavBar />
        <AdminTab changeTab={this.changeTab} currentTab={currentTab} />
        <div className="admin-content">
          {currentTab === 'request-section' ? (
            <RequestList userRequests={allUserRequests} />
          ) : null}
          {currentTab === 'article-section' ? <ReviewedArticles /> : null}
          {currentTab === 'reported-section' ? (
            <ReportedArticles reportedArticle={reportedArticle} />
          ) : null}
        </div>
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
};

export default AdminPage;
