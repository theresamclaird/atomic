import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function Image({
  alt, src, srcSets, ...props
}) {
  return (
    <Box as="picture">
      {srcSets.map((srcSet) => <Box as="source" srcSet={srcSet} />)}
      <Box as="img" alt={alt} src={src} {...props} />
    </Box>
  );
}

Image.defaultProps = {
  srcSets: [],
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcSets: PropTypes.arrayOf(PropTypes.string),
};

export { Image, Image as default };
