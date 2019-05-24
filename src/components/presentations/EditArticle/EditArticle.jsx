/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from 'draft-js';
import { toast } from 'react-toastify';
import draftToHtml from 'draftjs-to-html';
import uploadToCloudnary from '../../../utils/uploadToCloudnary';
import NewArticleForm from './EditArticleForm/EditArticleForm';
import validateImage from '../../../utils/validateImage';
import NavBar from '../../shared/NavBar/NavBar';
import keywordOptions from '../NewArticle/NewArticleForm/keywords';

class EditArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      keywords: [],
      imageUrl: '',
      // editorState: EditorState.createEmpty(),
      editorState: EditorState.createWithContent(
        // eslint-disable-next-line react/destructuring-assignment
        // eslint-disable-next-line react/prop-types
        ContentState.createFromText('sampleEditorContent')
      ),
      body: '',
      updatedAbstract: false,
      title: '',
      abstract: '',
      options: keywordOptions,
    };
    this.onChange = this.onChange.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  // currentState = () => {
  //   const { singleArticle } = this.props;
  // };
  componentDidMount = () => {
    const { getSingleArticle, match } = this.props;
    const { articleId } = match.params;
    return getSingleArticle(articleId);
  };

  static getDerivedStateFromProps(props, state) {
    if (props.abstract && !state.updatedAbstract) {
      return { abstract: props.abstract, updatedAbstract: true };
    }
    return state;
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

  handleAddition = (e, { value }) => {
    this.setState(prevState => ({
      options: [{ text: value, value }, ...prevState.options],
    }));
  };

  handleChange = (e, { value }) => this.setState({ keywords: value });

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

  saveOrPublish = async (e, isDraft) => {
    e.preventDefault();
    // const { singleArticle } = this.props;
    // const { article } = singleArticle;
    // console.log('hiiiiiiii', article);
    const { title, abstract, imageUrl, body, keywords, category } = this.state;
    const data = {
      title,
      abstract,
      is_draft: isDraft,
      image_url: imageUrl,
      body,
      keywords,
      category,
    };
    const { editAnArticle, match } = this.props;
    const { articleId } = match.params;
    await editAnArticle(articleId, data);
  };

  render() {
    const { editorState, options } = this.state;
    const { singleArticle } = this.props;
    const { article } = singleArticle;
    const contentBlocks = convertFromHTML(
      '<p>Lorem ipsum ' +
        'dolor sit amet, consectetur adipiscing elit. Mauris tortor felis, volutpat sit amet ' +
        'maximus nec, tempus auctor diam. Nunc odio elit,  ' +
        'commodo quis dolor in, sagittis scelerisque nibh. ' +
        'Suspendisse consequat, sapien sit amet pulvinar  ' +
        'tristique, augue ante dapibus nulla, eget gravida ' +
        'turpis est sit amet nulla. Vestibulum lacinia mollis  ' +
        'accumsan. Vivamus porta cursus libero vitae mattis. ' +
        'In gravida bibendum orci, id faucibus felis molestie ac.  ' +
        'Etiam vel elit cursus, scelerisque dui quis, auctor risus.</p>'
    );

    const sampleEditorContent = ContentState.createFromBlockArray(
      contentBlocks
    );

    console.log(sampleEditorContent);
    console.log('hiiiiiiii', article);
    return (
      <React.Fragment>
        <NavBar />
        <NewArticleForm
          saveCategory={article.category}
          titleRaw={article.title}
          valueRaw={article.abstract}
          bodyRaw={article.editorState}
          // abstractRaw={article.abstract}
          abstractRaw={this.state.abstract}
          categoryRaw={article.category}
          saveKeywords={this.saveKeywords}
          onEditorStateChange={this.onEditorStateChange}
          editorState={editorState}
          onChange={this.onChange}
          saveOrPublish={this.saveOrPublish}
          saveToCloudinary={this.saveToCloudinary}
          headerImage={article.image_url}
          options={options}
          handleChange={this.handleChange}
          handleAddition={this.handleAddition}
          sampleEditorContent={sampleEditorContent}
        />
      </React.Fragment>
    );
  }
}

EditArticle.propTypes = {
  getSingleArticle: PropTypes.func.isRequired,
  editAnArticle: PropTypes.func.isRequired,
  match: PropTypes.shape(PropTypes.objectOf).isRequired,
  singleArticle: PropTypes.shape({}).isRequired,
};

export default EditArticle;
