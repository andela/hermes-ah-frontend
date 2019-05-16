import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminTab from '../AdminTab/AdminTab';
import RequestList from '../ReviewerRequests/Requests/Requests';
import NavBar from '../../shared/NavBar/NavBar';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'request-section',
    };
  }

  componentDidMount = () => {
    const { getUserRequests } = this.props;
    getUserRequests();
  };

  changeTab = tab => {
    this.setState({ currentTab: tab });
  };

  render() {
    const { currentTab } = this.state;
    const { userRequests } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <AdminTab changeTab={this.changeTab} currentTab={currentTab} />
        <div className="profile-content">
          {currentTab === 'request-section' ? (
            <RequestList userRequests={userRequests} />
          ) : null}
          {currentTab === 'article-section' ? (
            <p>This is a section for reviewed articles</p>
          ) : null}
          {currentTab === 'reported-section' ? (
            <div>
              <p>This is a section for reported articles</p>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}
AdminPage.defaultProps = {
  getUserRequests: null,
  userRequests: null,
};
AdminPage.propTypes = {
  getUserRequests: PropTypes.shape(),
  userRequests: PropTypes.shape(),
};

export default AdminPage;
