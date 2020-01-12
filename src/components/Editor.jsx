import React from 'react';
import PropTypes from 'prop-types';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(evt) {
    const { getPreview } = this.props;
    getPreview(evt.target.value);
  }

  render() {
    const { input } = this.props;
    return (
      <div>
        <textarea id="editor" value={input} onChange={this.handleInput} />
      </div>
    );
  }
}

Editor.propTypes = {
  input: PropTypes.string.isRequired,
  getPreview: PropTypes.func.isRequired,
};

export default Editor;
