import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewArticleForm from './NewArticleForm/NewArticleForm';

class CreateArticle extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      handleInputChange,
      handleImageChange,
      handleEditorState,
      handleSubmit,
      handleTextAreaChange,
      title,
      content,
      textarea,
    } = this.props;

    return (
      <NewArticleForm
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        handleEditorState={handleEditorState}
        handleTextAreaChange={handleTextAreaChange}
        handleSubmit={handleSubmit}
        title={title}
        textarea={textarea}
        content={content}
      />
    );
  }
}

CreateArticle.propTypes = {
  handleTextAreaChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  handleEditorState: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  textarea: PropTypes.string.isRequired,
  content: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CreateArticle;
