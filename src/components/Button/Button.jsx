import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function Button({ label, sx, ...props }) {
  return (<Box as="button" sx={{ ...sx }} {...props}>{label}</Box>);
}

Button.defaultProps = {
  sx: {},
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  sx: PropTypes.objectOf(PropTypes.any),
};

export { Button, Button as default };
