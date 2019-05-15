import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditorState, convertToRaw } from 'draft-js';
import { toast } from 'react-toastify';
import draftToHtml from 'draftjs-to-html';
import uploadToCloudnary from '../../../utils/uploadToCloudnary';
import NewArticleForm from './NewArticleForm/NewArticleForm';
import validateImage from '../../../utils/validateImage';

class NewArticle extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      keywords: [],
      imageUrl: '',
      editorState: EditorState.createEmpty(),
      body: '',
      title: '',
      abstract: '',
    };
    this.processInput = this.processInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onEditorStateChange = editorState => {
    const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    this.setState({
      body,
      editorState,
    });
  };

  saveToCloudinary = async e => {
    const form = new FormData();
    const imageData = e.target.files[0];
    const validFormat = validateImage(imageData);
    if (validFormat.valid) {
      toast.info(validFormat.message, {
        type: toast.TYPE.INFO,
        closeButton: false,
        position: toast.POSITION.TOP_CENTER,
      });
      form.append('file', imageData);
      const res = await uploadToCloudnary(form);
      this.setState({ imageUrl: res.url });
      toast.dismiss();
    } else {
      toast.error(validFormat.message);
      e.target.value = '';
    }
  };

  saveKeywords = e => {
    e.preventDefault();
    const keywordData = e.target.attributes.getNamedItem('name').value;
    const { keywords } = this.state;
    this.setState({ keywords: [...keywords, keywordData] });
  };

  saveCategory = e => {
    e.preventDefault();
    const categoryData = e.target.attributes.getNamedItem('name').value;
    this.setState({ category: categoryData });
  };

  processInput = async (e, isDraft) => {
    e.preventDefault();
    const articleInput = this.state;
    const { postArticle } = this.props;
    const { body, imageUrl } = this.state;
    const data = {
      title: articleInput.title,
      abstract: articleInput.abstract,
      is_draft: isDraft,
      image_url: imageUrl,
      body,
      keywords: articleInput.keywords,
      category: articleInput.category,
    };
    await postArticle(data);
  };

  render() {
    const { success, history } = this.props;
    if (success) {
      toast.success('Your article has been successfully published');
      history.push('/');
    }
    const { editorState } = this.state;
    return (
      <NewArticleForm
        saveCategory={this.saveCategory}
        saveKeywords={this.saveKeywords}
        onEditorStateChange={this.onEditorStateChange}
        editorState={editorState}
        onChange={this.onChange}
        processInput={this.processInput}
        saveToCloudinary={this.saveToCloudinary}
      />
    );
  }
}

NewArticle.propTypes = {
  postArticle: PropTypes.shape().isRequired,
  success: PropTypes.bool.isRequired,
  history: PropTypes.func.isRequired,
};

export default NewArticle;
