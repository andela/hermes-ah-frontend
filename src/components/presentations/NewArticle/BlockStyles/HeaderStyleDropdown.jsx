import React from 'react';
import PropTypes from 'prop-types';
import './header-style-dropdown.scss';

class HeaderStyleDropdown extends React.Component {
  onToggle = event => {
    const { value } = event.target;
    const { onToggle } = this.props;
    onToggle(value);
  };

  render() {
    const { active } = this.props;
    const { headerOptions } = this.props;
    return (
      <select className="style-header" value={active} onChange={this.onToggle}>
        <option value="">Normal text</option>
        {headerOptions.map(heading => {
          return (
            <option key={heading.number} value={heading.style}>
              {heading.label}
            </option>
          );
        })}
      </select>
    );
  }
}

HeaderStyleDropdown.propTypes = {
  active: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  headerOptions: PropTypes.string.isRequired,
};

export default HeaderStyleDropdown;
