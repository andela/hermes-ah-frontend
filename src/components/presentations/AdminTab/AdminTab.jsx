import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminButton from './AdminTabButton';
import './admintab.scss';

class AdminTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { changeTab, currentTab } = this.props;
    const AdminTabItems = [
      {
        id: 1,
        value: 'Reviewer Requests',
        section: 'request-section',
      },
      {
        id: 2,
        value: 'Reviewed Articles',
        section: 'article-section',
      },
      {
        id: 3,
        value: 'Reported Articles',
        section: 'reported-section',
      },
    ];
    return (
      <React.Fragment>
        <div className="admin-page">
          <div className="admin-tab">
            <div className="admin-tab-items-left">
              {AdminTabItems.map(tab => {
                return (
                  <AdminButton
                    key={tab.id}
                    value={tab.value}
                    className={
                      currentTab === tab.section
                        ? 'admin-btn-active'
                        : 'admin-btn'
                    }
                    onClick={() => changeTab(tab.section)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AdminTab.propTypes = {
  changeTab: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
};

export default AdminTab;
