import marked from 'marked';
import dompurify from 'dompurify';

const PREVIEW = 'PREVIEW';

function getPreview(markdown) {
  return dompurify.sanitize(marked.parse(markdown));
}

function getPreviewAction(markdown) {
  return {
    type: PREVIEW,
    markdown,
  };
}

function rootReducer(state = '', action) {
  switch (action.type) {
    case PREVIEW:
      return getPreview(action.markdown);
    default:
      return state;
  }
}

export { rootReducer, getPreviewAction };
