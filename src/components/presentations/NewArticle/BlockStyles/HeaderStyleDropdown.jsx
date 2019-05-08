/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './header-style-dropdown.scss';

class HeaderStyleDropdown extends React.Component {
  onToggle = event => {
    const { value } = event.target;
    this.props.onToggle(value);
  };

  render() {
    return (
      // eslint-disable-next-line react/destructuring-assignment
      <select
        className="style-header"
        value={this.props.active}
        onChange={this.onToggle}
      >
        <option value="">
          Normal text
          {/* <i className="fas fa-caret-down" /> */}
        </option>
        {this.props.headerOptions.map(heading => {
          return <option value={heading.style}>{heading.label}</option>;
        })}
      </select>
    );
  }
}

export default HeaderStyleDropdown;
