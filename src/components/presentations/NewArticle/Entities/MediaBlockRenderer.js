/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import { EditorState, RichUtils, AtomicBlockUtils } from 'draft-js';

// eslint-disable-next-line import/prefer-default-export
export const mediaBlockRenderer = block => {
  // eslint-disable-next-line no-console
  console.log('hit');
  if (block.getType() === 'atomic') {
    return {
      // eslint-disable-next-line no-use-before-define
      component: Media,
      editable: false,
    };
  }

  return null;
};

const Image = props => {
  // eslint-disable-next-line no-extra-boolean-cast
  // eslint-disable-next-line react/destructuring-assignment
  if (!props.src) {
    // eslint-disable-next-line react/prop-types
    return <img src={props.src} />;
  }
  return null;
};

const Media = props => {
  // eslint-disable-next-line no-console
  console.log('area');
  const entity = props.contentState.getEntity(props.block.getEntityAt(0));
  const { src } = entity.getData();
  const type = entity.getType();

  let media;

  if (type === 'image') {
    // eslint-disable-next-line no-console
    console.log('area2');
    media = <Image src={src} />;
  }

  return media;
};
