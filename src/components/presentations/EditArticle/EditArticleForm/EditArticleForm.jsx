import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Input, TextArea, Dropdown, Button } from 'semantic-ui-react';
import categoryoptions from '../../NewArticle/NewArticleForm/category';
import './edit-article.scss';

const NewArticleForm = ({
  saveCategory,
  saveToCloudinary,
  editorState,
  defaultEditorState,
  onEditorStateChange,
  saveOrPublish,
  onChange,
  headerImage,
  currentValues,
  handleChange,
  handleAddition,
  keywords,
  titleRaw,
  abstractRaw,
  categoryRaw,
}) => (
  <div>
    <main className="main-content">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <form className="p-30 bg-gray rounded" id="whole-form">
                <div className="input-row">
                  <div>
                    <h3 className="input-heading">Title</h3>
                    <Input
                      className="input-holders"
                      name="title"
                      defaultValue={titleRaw}
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <br />
                    <h3 className="input-heading">Abstract</h3>
                    <TextArea
                      className="input-holders"
                      value={abstractRaw}
                      onChange={onChange}
                      name="abstract"
                    />
                  </div>
                </div>
                <br />
                <div className="editor-group">
                  <h3 className="input-heading">Body</h3>
                  <Editor
                    onEditorStateChange={onEditorStateChange}
                    editorState={editorState}
                    defaultEditorState={defaultEditorState}
                  />
                </div>
                <br />
                <div className="dropdown-group">
                  <div>
                    <h3 className="input-heading">Keywords</h3>
                    <Dropdown
                      options={keywords}
                      placeholder="Type in your keywords"
                      search
                      selection
                      fluid
                      multiple
                      allowAdditions
                      onAddItem={handleAddition}
                      onChange={handleChange}
                      value={currentValues}
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
                      options={categoryoptions}
                      onChange={saveCategory}
                      className="input-holders"
                      defaultValue={categoryRaw}
                    />
                  </div>
                </div>
                <br />
                <h3 className="input-heading">Article Header Image</h3>
                <div className="image-group">
                  <div className="image-upload">
                    <div className="image-upload-box">
                      <input
                        type="file"
                        name="image"
                        className="form-control"
                        onChange={saveToCloudinary}
                        accept=".png, .jpg, .jpeg"
                      />
                    </div>
                    <p>One file only</p>
                    <p>2 MB limit</p>
                    <p>Allowed types: png, jpg, jpeg</p>
                  </div>
                  <div className="headerImage">
                    <img alt="" src={headerImage} />
                  </div>
                </div>
                <br />
                <br />
                <br />
                <div className="text-center">
                  <Button
                    className="save-button"
                    type="submit"
                    onClick={e => saveOrPublish(e, true)}
                  >
                    Save as Draft
                  </Button>
                  <Button
                    className="save-button"
                    type="submit"
                    onClick={e => saveOrPublish(e, false)}
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
  saveOrPublish: PropTypes.func.isRequired,
  onEditorStateChange: PropTypes.func.isRequired,
  editorState: PropTypes.shape().isRequired,
  defaultEditorState: PropTypes.shape().isRequired,
  saveToCloudinary: PropTypes.func.isRequired,
  saveCategory: PropTypes.func.isRequired,
  headerImage: PropTypes.string.isRequired,
  titleRaw: PropTypes.string.isRequired,
  categoryRaw: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddition: PropTypes.func.isRequired,
  abstractRaw: PropTypes.string.isRequired,
};

export default NewArticleForm;
