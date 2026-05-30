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
        // `em` so the corner index scales with the card (was inheriting the
        // document root size, which didn't scale).
        fontSize: '1.2em',
        lineHeight: 1,
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
