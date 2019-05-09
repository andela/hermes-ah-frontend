import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlockStyleButton from './BlockStyleButton';
import HeaderStyleDropdown from './HeaderStyleDropdown';

export const BLOCK_TYPES = [
  { label: ' “ ” ', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
];

export const HEADER_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
];

export function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}

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
