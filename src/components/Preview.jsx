/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const Preview = (props) => {
  const { preview } = props;
  return (
    <div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: preview }} />
    </div>
  );
};

Preview.propTypes = {
  preview: PropTypes.string.isRequired,
};

export default Preview;
