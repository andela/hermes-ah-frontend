import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Input, TextArea, Dropdown, Button } from 'semantic-ui-react';
import keywordsOptions from './keywords';
import categoryOptions from './category';
import './new-article.scss';

const NewArticleForm = ({
  handleInputChange,
  handleImageChange,
  handleEditorState,
  handleSubmit,
  handleTextAreaChange,
  title,
  content,
  textarea,
}) => (
  <div>
    <main className="main-content">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <form
                className="p-30 bg-gray rounded"
                id="whole-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div>
                    <h3 className="input-heading">Title</h3>
                    <Input
                      className="input-holders"
                      name="title"
                      value={title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <br />
                    <h3 className="input-heading">Abstract</h3>
                    <TextArea
                      className="input-holders"
                      name="textarea"
                      value={textarea}
                      onChange={handleTextAreaChange}
                    />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <h3 className="input-heading">Body</h3>
                  <Editor
                    editorState={content}
                    onEditorStateChange={handleEditorState}
                  />
                </div>
                <br />
                <div>
                  <h3 className="input-heading">Keywords</h3>
                  <Dropdown
                    placeholder="category"
                    fluid
                    multiple
                    search
                    selection
                    options={categoryOptions}
                  />
                  <p className="keyword-instruction">
                    Enter a comma-separated list. For example: Anatomy,
                    Bioinformatics
                  </p>
                </div>
                <br />
                <div>
                  <h3 className="input-heading">Category</h3>
                  <Dropdown
                    placeholder="Select Keywords"
                    fluid
                    search
                    selection
                    options={keywordsOptions}
                    className="input-holders"
                  />
                </div>
                <br />
                <h3 className="input-heading">Article Header Image</h3>
                <div className="image-upload">
                  <div className="image-upload-box">
                    <input
                      type="file"
                      name="image"
                      className="form-control"
                      onChange={handleImageChange}
                    />
                  </div>
                  <p>One file only</p>
                  <p>2 MB limit</p>
                  <p>Allowed types: png, gif, jpg, jpeg</p>
                </div>
                <br />
                <br />
                <br />
                <div className="text-center">
                  <Button className="save-button" type="submit">
                    Save as Draft
                  </Button>
                  <Button className="save-button" type="submit">
                    Save & Publish
                  </Button>
                  <Button className="save-button" basic color="blue">
                    Cancel
                  </Button>
                </div>
                <br />
                <br />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

NewArticleForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  handleEditorState: PropTypes.func.isRequired,
  handleTextAreaChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  textarea: PropTypes.string.isRequired,
  content: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default NewArticleForm;
