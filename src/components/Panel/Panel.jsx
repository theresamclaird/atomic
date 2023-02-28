import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function Panel({ sx, children, ...props }) {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        width: '100%',
        minWidth: '300px',
        maxWidth: '600px',
        mb: ['small', 'medium'],
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

Panel.defaultProps = {
  sx: {},
};

Panel.propTypes = {
  sx: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

export { Panel, Panel as default };
