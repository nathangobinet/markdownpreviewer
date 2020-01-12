import React from 'react';
import { connect } from 'react-redux';
import { getPreviewAction } from '../redux/reducers';

import Editor from './Editor';
import Preview from './Preview';

const EditorMapDispatchToProps = (dispatch) => ({
  getPreview: (markdown) => (
    dispatch(getPreviewAction(markdown))
  ),
});

const PreviewMapStateToProps = (preview) => ({
  preview,
});

const EditorContainer = connect(null, EditorMapDispatchToProps)(Editor);
const PreviewContainer = connect(PreviewMapStateToProps, null)(Preview);

const App = () => (
  <div className="container">
    <div className="row">
      <header className="col-12">
        <h1>Markdown Previewer</h1>
      </header>
      <div className="col-md-6">
        <span className="box-label">Editor</span>
        <EditorContainer />
      </div>
      <div className="col-md-6">
        <span className="box-label">Preview</span>
        <PreviewContainer />
      </div>
      <footer className="col-12">
                Made with
        <span aria-label="love" role="img"> ♥️ </span>
        <span>by </span>
        <a href="https://github.com/nathangobinet/markdownpreviewer" target="_blank" without rel="noopener noreferrer">Nathan Gobinet</a>
      </footer>
    </div>
  </div>
);

export default App;
