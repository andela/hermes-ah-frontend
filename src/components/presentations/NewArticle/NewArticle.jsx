/* eslint-disable react/button-has-type */
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
import http from '../../../utils/httpService';
import './new-article.scss';
import { mediaBlockRenderer } from './Entities/MediaBlockRenderer';
import BlockStyleToolbar from './BlockStyles/BlockStyleToolbar';

class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      abstract: '',
      body: '',
      keywords: '',
      //   category: '',
      //   image: '',
      // is_draft: false,
      editorState: EditorState.createEmpty(),
    };
    this.onChange = editorState => {
      const contentState = editorState.getCurrentContent();
      const html = stateToHTML(contentState);
      console.log('content state', convertToRaw(contentState), html);
      this.setState({ editorState });
    };
    this.toggleBlockType = this.toggleBlockType.bind(this);
  }

  toggleBlockType = blockType => {
    // eslint-disable-next-line react/destructuring-assignment
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  // eslint-disable-next-line react/sort-comp
  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      // eslint-disable-next-line react/destructuring-assignment
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  onClick = e => {
    this.onChange(
      // eslint-disable-next-line react/destructuring-assignment
      RichUtils.toggleInlineStyle(this.state.editorState, e.target.name)
    );
  };

  // eslint-disable-next-line react/sort-comp
  toggleBlockType(blockType) {
    // eslint-disable-next-line react/destructuring-assignment
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  onItalicClick = () => {
    this.onChange(
      // eslint-disable-next-line react/destructuring-assignment
      RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC')
    );
  };

  onBoldClick = () => {
    this.onChange(
      // eslint-disable-next-line react/destructuring-assignment
      RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD')
    );
  };

  onUnderlineClick = () => {
    this.onChange(
      // eslint-disable-next-line react/destructuring-assignment
      RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE')
    );
  };

  onStrikethroughClick = () => {
    this.onChange(
      // eslint-disable-next-line react/destructuring-assignment
      RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH')
    );
  };

  // eslint-disable-next-line react/no-string-refs
  focus = () => this.refs.editor.focus();

  // add image function
  onAddImage = e => {
    e.preventDefault();
    const { editorState } = this.state;
    // eslint-disable-next-line no-alert
    const urlValue = window.prompt('Paste Image Link');
    // eslint-disable-next-line no-console
    const contentState = editorState.getCurrentContent();
    // eslint-disable-next-line no-console
    // eslint-disable-next-line no-console
    const contentStateWithEntity = contentState.createEntity(
      'image',
      'IMMUTABLE',
      { src: urlValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    // eslint-disable-next-line no-console
    console.log(contentStateWithEntity, 'nothing changed');
    const newEditorState = EditorState.set(
      editorState,
      { currentContent: contentStateWithEntity },
      'create-entity'
    );
    // eslint-disable-next-line no-console
    console.log(newEditorState, 'new state');
    // eslint-disable-next-line no-console
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

  handleClick = async e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
    const newArticle = this.state;

    // eslint-disable-next-line no-console
    console.log(newArticle, 'data');
    const response = await http.post(
      'https://hermes-ah-backend.herokuapp.com/api/v1/new-article'
    );
    const { message } = response.data;
    return message;
  };

  render() {
    const { title, abstract, keywords, body } = this.state;
    console.log({ body });
    // const styles = ['BOLD', 'ITALIC', 'UNDERLINE', 'STRIKETHROUGH'];
    // const styles = [
    //   { label: 'B', style: 'BOLD' },
    //   { label: 'I', style: 'ITALIC' },
    //   { label: 'U', style: 'UNDERLINE' },
    //   { label: 'S', style: 'STRIKETHROUGH' },
    // ];
    // const buttons = styles.map(style => {
    //   // change this to switch case
    //   let Style;
    //   let bold;
    //   let styled;
    //   let italic;
    //   let underline;
    //   let strikethrough;
    //   if (style.label === 'B') {
    //     bold = <i className="fas fa-bold" />;
    //     Style = bold;
    //     styled = 'BOLD';
    //   }
    //   if (style.label === 'I') {
    //     italic = <i className="fas fa-italic" />;
    //     Style = italic;
    //   }
    //   if (style.label === 'U') {
    //     underline = <i className="fas fa-underline" />;
    //     Style = underline;
    //   }
    //   if (style.label === 'S') {
    //     strikethrough = <i className="fas fa-strikethrough" />;
    //     Style = strikethrough;
    //   }
    //   return (
    //     // eslint-disable-next-line react/button-has-type
    //     <button key={styled} onClick={this.onClick} name={styled}>
    //       {Style}
    //     </button>
    //   );
    // });

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
                // eslint-disable-next-line react/destructuring-assignment
                editorState={this.state.editorState}
                onToggle={this.toggleBlockType}
              />
              {/* {buttons} */}
              <button onClick={this.onBoldClick}>
                <i className="fas fa-bold" />
              </button>
              <button onClick={this.onItalicClick}>
                <i className="fas fa-italic" />
              </button>
              <button onClick={this.onUnderlineClick}>
                <i className="fas fa-underline" />
              </button>
              <button onClick={this.onStrikethroughClick}>
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
                // eslint-disable-next-line react/destructuring-assignment
                blockRendererFn={mediaBlockRenderer}
                // eslint-disable-next-line react/destructuring-assignment
                editorState={this.state.editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange}
                name="body"
                value={body}
                // name="body"
                // eslint-disable-next-line react/no-string-refs
                ref="editor"
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
            <Dropdown placeholder="pick category" search selection />
            <br />
            <br />
            <br />
            <p className="labels">Article Header image</p>
            <div className="image-upload">
              <div className="image-upload-box">
                <input type="file" />
              </div>
              <p>One file only</p>
              <p>2 MB limit</p>
              <p>Allowed types: png, gif, jpg, jpeg</p>
            </div>
            <br />
            <div>
              <Button>Save as draft</Button>
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

export default NewArticle;
