import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

const Image = ({ alt, src, ...props }) => <Box as="img" alt={alt} src={src} {...props} />;

Image.defaultProps = {};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export { Image };