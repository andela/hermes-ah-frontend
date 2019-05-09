import React from 'react';
import PropTypes from 'prop-types';

class BlockStyleButton extends React.Component {
  onToggle = e => {
    e.preventDefault();
    const { onToggle, style } = this.props;
    onToggle(style);
  };

  render() {
    const { active, label } = this.props;
    let className = 'RichEditor-styleButton';
    if (active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <button type="button" className={className} onClick={this.onToggle}>
        {label}
      </button>
    );
  }
}

BlockStyleButton.propTypes = {
  style: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  label: PropTypes.func.isRequired,
  active: PropTypes.func.isRequired,
};

export default BlockStyleButton;
