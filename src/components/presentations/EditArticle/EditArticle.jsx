import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { toast } from 'react-toastify';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import uploadToCloudnary from '../../../utils/uploadToCloudnary';
import NewArticleForm from './EditArticleForm/EditArticleForm';
import validateImage from '../../../utils/validateImage';
import NavBar from '../../shared/NavBar/NavBar';

class EditArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      options: [],
      imageUrl: '',
      editorState: EditorState.createEmpty(),
      defaultEditorState: '',
      body: '',
      updatedAbstract: false,
      title: '',
      abstract: '',
      currentValues: [''],
    };
    this.onChange = this.onChange.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  componentDidMount = () => {
    const { getSingleArticle, match } = this.props;
    const { articleId } = match.params;
    return getSingleArticle(articleId);
  };

  static getDerivedStateFromProps(props, state) {
    if (
      props.abstract &&
      props.singleArticle.article.Keywords &&
      state.updatedAbstract === false
    ) {
      const blocksFromHtml = htmlToDraft(props.singleArticle.article.body);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      const { singleArticle } = props;
      const { article } = singleArticle;
      const { category } = article;

      return {
        abstract: props.abstract,
        updatedAbstract: true,
        keywords: props.singleArticle.article.Keywords,
        options: props.singleArticle.article.Keywords.map(option => {
          return {
            key: option.keyword,
            text: option.keyword,
            value: option.keyword,
          };
        }),
        category: [{ key: category, text: category, value: category }],
        currentValues: props.singleArticle.article.Keywords.map(
          option => option.keyword
        ),
        title: props.singleArticle.article.title,
        imageUrl: props.singleArticle.article.image_url,
        editorState: EditorState.createWithContent(contentState),
        body: props.singleArticle.article.body,
      };
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

  handleAddition = (_e, { value }) => {
    this.setState(prevState => ({
      options: [{ text: value, value }, ...prevState.options],
    }));
  };

  handleChange = (e, { value }) => this.setState({ currentValues: value });

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

  saveCategory = e => {
    e.preventDefault();
    const categoryData = e.target.attributes.getNamedItem('name').value;
    this.setState({ category: categoryData });
  };

  saveOrPublish = async (e, isDraft) => {
    e.preventDefault();
    const { title, abstract, imageUrl, body, keywords, category } = this.state;
    const data = {
      title,
      abstract,
      is_draft: isDraft,
      image_url: imageUrl,
      body,
      keywords: keywords.map(keyword => keyword.keyword),
      category,
    };
    const { editAnArticle, match } = this.props;
    const { articleId } = match.params;
    await editAnArticle(articleId, data);
  };

  render() {
    const {
      editorState,
      options,
      title,
      abstract,
      category,
      currentValues,
      imageUrl,
      defaultEditorState,
    } = this.state;
    const { singleArticle } = this.props;
    const { article } = singleArticle;
    return (
      <React.Fragment>
        <NavBar />
        <NewArticleForm
          saveCategory={this.saveCategory}
          titleRaw={title}
          valueRaw={article.abstract}
          bodyRaw={article.editorState}
          abstractRaw={abstract}
          categoryRaw={category}
          saveKeywords={this.saveKeywords}
          onEditorStateChange={this.onEditorStateChange}
          editorState={editorState}
          defaultEditorState={defaultEditorState}
          currentValues={currentValues}
          onChange={this.onChange}
          saveOrPublish={this.saveOrPublish}
          saveToCloudinary={this.saveToCloudinary}
          headerImage={imageUrl}
          options={options}
          handleChange={this.handleChange}
          handleAddition={this.handleAddition}
          keywords={options}
          sampleEditorContent={editorState}
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
