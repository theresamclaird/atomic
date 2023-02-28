import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { Box } from '../Box';

const Text = forwardRef(({
  as, sx, children, ...props
}, ref) => {
  const theme = useTheme();
  const asStyle = theme?.text?.[as] || theme?.text?.default || {};

  return (
    <Box
      as={as}
      ref={ref}
      sx={{
        ...asStyle,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
});

Text.defaultProps = {
  as: 'p',
  sx: {},
};

Text.propTypes = {
  as: PropTypes.string,
  sx: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export { Text, Text as default };
