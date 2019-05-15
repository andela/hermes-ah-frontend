import React, { Component } from 'react';
import AdminTab from '../AdminTab/AdminTab';
import NavBar from '../../shared/NavBar/NavBar';

class Adminpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'request-section',
    };
  }

  changeTab = tab => {
    this.setState({ currentTab: tab });
  };

  render() {
    const { currentTab } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <AdminTab changeTab={this.changeTab} currentTab={currentTab} />
        <div className="profile-content">
          {currentTab === 'request-section' ? (
            <p>This is a section for reviewer requests</p>
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

export default Adminpage;
