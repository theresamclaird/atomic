import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function Button({
  label, onClick, variant, sx, ...props
}) {
  const variantCss = ({
    primary: {
      cursor: 'pointer',
      backgroundColor: '#562cac',
      border: 'solid 1px #ccc',
      borderRadius: '0.33rem',
      color: '#fff',
      px: 1,
      py: '0.5rem',
      fontWeight: 900,
    },
    secondary: {
      cursor: 'pointer',
      backgroundColor: '#bdb5d5',
      border: 'solid 1px #ccc',
      borderRadius: '0.33rem',
      color: '#333',
      px: 1,
      py: '0.5rem',
      fontWeight: 900,
    },
    unstyled: {},
  })[variant];

  return (
    <Box
      as="button"
      sx={{
        ...variantCss,
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
  variant: 'primary',
  sx: {},
};

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'unstyled']),
  sx: PropTypes.objectOf(PropTypes.any),
};

export { Button, Button as default };
