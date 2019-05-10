import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlockStyleButton from './BlockStyleButton';
import HeaderStyleDropdown from './HeaderStyleDropdown';
import { BLOCK_TYPES, HEADER_TYPES } from './TextStyle';

class BlockStyleToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { editorState } = this.props;
    const { onToggle } = this.props;
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return (
      <span className="RichEditor-controls">
        <HeaderStyleDropdown
          headerOptions={HEADER_TYPES}
          active={blockType}
          onToggle={onToggle}
        />

        {BLOCK_TYPES.map(type => {
          return (
            <BlockStyleButton
              active={type.style === blockType}
              label={type.label}
              onToggle={onToggle}
              style={type.style}
              key={type.label}
              type={type}
            />
          );
        })}
      </span>
    );
  }
}

BlockStyleToolbar.propTypes = {
  editorState: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default BlockStyleToolbar;
