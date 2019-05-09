import React, { Component } from 'react';
import { Input, Button, Dropdown } from 'semantic-ui-react';
import {
  Editor,
  EditorState,
  RichUtils,
  AtomicBlockUtils,
  convertToRaw,
} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import PropTypes from 'prop-types';
import uploadToCloudinary from '../../../utils/uploadToCloudnary';
import './new-article.scss';
import BlockStyleToolbar from './BlockStyles/BlockStyleToolbar';

class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { title: '', abstract: '', body: '', keywords: '', category: '' },
      headerpic: '',
      editorState: EditorState.createEmpty(),
    };
    this.onChange = editorState => {
      const contentState = editorState.getCurrentContent();
      const html = stateToHTML(contentState);
      const converted = (convertToRaw(contentState), html);
      this.setState({ body: converted, editorState });
    };
    this.toggleBlockType = this.toggleBlockType.bind(this);
  }

  toggleBlockType = blockType => {
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  //   handlers
  handleKeyCommand = command => {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  onClick = e => {
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleInlineStyle(editorState, e.target.name));
  };

  // handler for Article header
  handleImageChange = async e => {
    const form = new FormData();
    const imageData = e.target.files[0];
    form.append('file', imageData);
    const res = await uploadToCloudinary(form);
    this.setState({ headerpic: res.url });
  };

  handleChange = (e, { value }) => {
    this.setState({ category: value });
  };

  // handler for save to draft button
  handleDraftClick = async e => {
    e.preventDefault();
    const { data } = this.state;
    const { createNewArticle: article } = this.props;
    await article(data);

    this.setState({ [e.target.name]: e.target.value });
  };

  // handler for
  handleClick = async e => {
    e.preventDefault();
    const { data } = this.state;
    const { createNewArticle: article } = this.props;
    await article(data);

    this.setState({ [e.target.name]: e.target.value });
  };

  // function for adding images to the editor's body
  onAddImage = e => {
    e.preventDefault();
    const { editorState } = this.state;
    const urlValue = window.prompt('Paste Image Link');
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'image',
      'IMMUTABLE',
      { src: urlValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      editorState,
      { currentContent: contentStateWithEntity },
      'create-entity'
    );
    this.setState(
      {
        editorState: AtomicBlockUtils.insertAtomicBlock(
          newEditorState,
          entityKey,
          ' '
        ),
      },
      () => {
        setTimeout(() => this.focus(), 0);
      }
    );
  };

  // handler for inline draft editor styles
  onItalicClick = () => {
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  onBoldClick = () => {
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  onUnderlineClick = () => {
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  onStrikethroughClick = () => {
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'));
  };

  toggleBlockType(blockType) {
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleBlockType(editorState, blockType));
  }

  render() {
    const {
      title,
      abstract,
      keywords,
      body,
      category,
      headerpic,
      editorState,
    } = this.state;

    const options = [
      { key: 1, text: 'Health', value: 'Health', name: 'Health' },
      { key: 2, text: 'Engineering', value: 'Engineering', name: 'Enginnerin' },
      { key: 3, text: 'Chemistry', value: 'Chemistry', name: 'sdssd' },
      { key: 4, text: 'Ecology', value: 'Ecology', name: 'ddds' },
      { key: 5, text: 'Genetics', value: 'Genetics', name: 'hjkh' },
      { key: 6, text: 'Physiology', value: 'Physiology' },
      { key: 7, text: 'Developement', value: 'Developement' },
      { key: 8, text: 'Nutrition', value: 'Nutrition' },
    ];

    return (
      <div>
        <div className="whole-text">
          <form onChange={this.handleClick}>
            <br />
            <br />
            <br />
            <p className="labels">Title</p>
            <Input name="title" value={title} className="inputBox" />
            <br />
            <br />
            <p className="labels">Abstract</p>
            <Input
              name="abstract"
              value={abstract}
              className="inputBox"
              id="another-one"
            />
            <br />
            <br />
            <p className="labels">Body</p>
            <div className="editor">
              <BlockStyleToolbar
                editorState={editorState}
                onToggle={this.toggleBlockType}
              />
              {/* Inline buttons */}
              <button type="button" onClick={this.onBoldClick}>
                <i className="fas fa-bold" />
              </button>
              <button type="button" onClick={this.onItalicClick}>
                <i className="fas fa-italic" />
              </button>
              <button type="button" onClick={this.onUnderlineClick}>
                <i className="fas fa-underline" />
              </button>
              <button type="button" onClick={this.onStrikethroughClick}>
                <i className="fas fa-strikethrough" />
              </button>
              <button
                type="button"
                className="inline styleButton"
                onClick={this.onAddImage}
              >
                <i className="fas fa-image" />
              </button>
              <Editor
                editorState={editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange}
                name="body"
                value={body}
              />
            </div>
            <br />
            <p className="labels">Keywords</p>
            <Input name="keywords" value={keywords} className="inputBox" />
            <p className="keywordTitle">
              Enter a comma-separated list. For example: Anatomy, Bioinformatics
            </p>
            <br />
            <p className="labels">Category</p>
            <Dropdown
              id="dropdown"
              placeholder="pick category"
              name={options}
              options={options}
              multiple
              value={category}
              onChange={this.handleChange}
              search
              selection
            />
            <br />
            <br />
            <br />
            <p className="labels">Article Header image</p>
            <div className="image-upload">
              <div className="image-upload-box">
                <input
                  type="file"
                  handleChange={this.handleImageChange}
                  headerPic={headerpic}
                  name="file"
                  value={headerpic}
                />
              </div>
              <p>One file only</p>
              <p>2 MB limit</p>
              <p>Allowed types: png, gif, jpg, jpeg</p>
            </div>
            <br />
            <div>
              <Button onClick={this.handleDraftClick}>Save as draft</Button>
              <Button onClick={this.handleClick}>Save & Publish</Button>
              <Button basic color="blue" content="Cancel" />
            </div>
            <br />
            <br />
            <br />
          </form>
        </div>
      </div>
    );
  }
}

NewArticle.propTypes = {
  createNewArticle: PropTypes.string.isRequired,
};

export default NewArticle;
