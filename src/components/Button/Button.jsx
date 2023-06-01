import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function Button({
  label, onClick, sx, ...props
}) {
  return (
    <Box
      as="button"
      sx={{
        cursor: 'pointer',
        backgroundColor: '#bdb5d5',
        borderRadius: '0.33rem',
        color: '#333',
        px: 1,
        py: '0.5rem',
        fontWeight: 900,
        ...sx,
      }}
      onClick={onClick}
      {...props}
    >
      {label}
    </Box>
  );
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
