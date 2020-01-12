import React from 'react';
import PropTypes from 'prop-types';

const Editor = (props) => {
  const { getPreview } = props;
  return (
    <div>
      <textarea id="editor" onChange={(evt) => getPreview(evt.target.value)} />
    </div>
  );
};

Editor.propTypes = {
  getPreview: PropTypes.func.isRequired,
};

export default Editor;
