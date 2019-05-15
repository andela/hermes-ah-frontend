import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Input, TextArea, Dropdown, Button } from 'semantic-ui-react';
import keywordsOptions from './keywords';
import categoryOptions from './category';
import './new-article.scss';

const NewArticleForm = ({
  saveCategory,
  saveKeywords,
  saveToCloudinary,
  editorState,
  onEditorStateChange,
  processInput,
  onChange,
}) => (
  <div>
    <main className="main-content">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <form className="p-30 bg-gray rounded" id="whole-form">
                <div className="row">
                  <div>
                    <h3 className="input-heading">Title</h3>
                    <Input
                      className="input-holders"
                      name="title"
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <br />
                    <h3 className="input-heading">Abstract</h3>
                    <TextArea
                      className="input-holders"
                      name="abstract"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <h3 className="input-heading">Body</h3>
                  <Editor
                    onEditorStateChange={onEditorStateChange}
                    editorState={editorState}
                  />
                </div>
                <br />
                <div>
                  <h3 className="input-heading">Keywords</h3>
                  <Dropdown
                    placeholder="keywords"
                    name="category"
                    fluid
                    multiple
                    search
                    selection
                    options={keywordsOptions}
                    onChange={saveKeywords}
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
                    placeholder="Select category"
                    fluid
                    search
                    selection
                    options={categoryOptions}
                    onChange={saveCategory}
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
                      onChange={saveToCloudinary}
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
                  <Button
                    className="save-button"
                    type="submit"
                    onClick={e => processInput(e, true)}
                  >
                    Save as Draft
                  </Button>
                  <Button
                    className="save-button"
                    type="submit"
                    onClick={e => processInput(e, false)}
                  >
                    Save & Publish
                  </Button>
                  <Link to="/profile/">
                    <Button className="save-button" basic color="blue">
                      Cancel
                    </Button>
                  </Link>
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
  onChange: PropTypes.func.isRequired,
  processInput: PropTypes.func.isRequired,
  onEditorStateChange: PropTypes.func.isRequired,
  editorState: PropTypes.shape().isRequired,
  saveToCloudinary: PropTypes.func.isRequired,
  saveKeywords: PropTypes.func.isRequired,
  saveCategory: PropTypes.func.isRequired,
};

export default NewArticleForm;
