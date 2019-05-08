/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class BlockStyleButton extends React.Component {
  onToggle = e => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.onToggle(this.props.style);
  };

  render() {
    let className = 'RichEditor-styleButton';
    // eslint-disable-next-line react/prop-types
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      // eslint-disable-next-line react/button-has-type
      <button className={className} onClick={this.onToggle}>
        {this.props.label}
      </button>
    );
  }
}

export default BlockStyleButton;
