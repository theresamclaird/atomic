import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '../Box';

function Corner({ sx, label, pip }) {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      gap={0}
      sx={{
        position: 'absolute',
        p: 0,
        m: 0,
        '&::after': { content: `"${pip}"` },
        ...sx,
      }}
    >
      <Box>{label}</Box>
    </Flex>
  );
}

Corner.defaultProps = {
  sx: {},
};

Corner.propTypes = {
  sx: PropTypes.objectOf(PropTypes.any),
  label: PropTypes.string.isRequired,
  pip: PropTypes.string.isRequired,
};

export default Corner;
