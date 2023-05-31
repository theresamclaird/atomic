import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './Box';

function Flex({
  direction: flexDirection,
  wrap: flexWrap,
  justify: justifyContent,
  align: alignItems,
  gap,
  children,
  sx,
  ...props
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection,
        flexWrap,
        justifyContent,
        gap,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
Flex.displayName = 'Flex';

Flex.defaultProps = {
  direction: 'row',
  wrap: 'nowrap',
  justify: 'flex-start',
  align: 'flex-start',
  gap: 1,
  sx: {},
};

Flex.propTypes = {
  direction: PropTypes.string,
  wrap: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sx: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export { Flex, Flex as default };
