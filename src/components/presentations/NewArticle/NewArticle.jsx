import React from 'react';
import { EditorState } from 'draft-js';

import NewArticleForm from './NewArticleForm/NewArticleForm';

class CreateArticle extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      content: EditorState.createEmpty(),
    };
  }

  handleEditorState = editorState => {
    this.setState({
      content: editorState,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
  };

  render() {
    const {
      handleTextAreaChange,
      handleInputChange,
      title,
      textarea,
      content,
    } = this.state;

    return (
      <NewArticleForm
        handleInputChange={handleInputChange}
        handleTextAreaChange={handleTextAreaChange}
        handleSubmit={this.handleSubmit}
        handleImageChange={this.handleImageChange}
        title={title}
        textarea={textarea}
        content={content}
        handleEditorState={this.handleEditorState}
      />
    );
  }
}

export default CreateArticle;
