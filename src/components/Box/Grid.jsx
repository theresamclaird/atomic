import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './Box';

function Grid({
  columns: gridTemplateColumns,
  rows: gridTemplateRows,
  gap: gridGap,
  children,
  sx,
  ...props
}) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns,
        gridTemplateRows,
        gridGap,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
Grid.displayName = 'Grid';

Grid.defaultProps = {
  columns: '',
  rows: '',
  gap: 0,
  sx: {},
};

Grid.propTypes = {
  columns: PropTypes.string,
  rows: PropTypes.string,
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sx: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export { Grid, Grid as default };
