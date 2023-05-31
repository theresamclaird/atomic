import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function Button({
  label, onClick, sx, ...props
}) {
  return (<Box as="button" sx={{ ...sx }} onClick={onClick} {...props}>{label}</Box>);
}

Button.defaultProps = {
  onClick: () => null,
  sx: {},
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  sx: PropTypes.objectOf(PropTypes.any),
};

export { Button, Button as default };
