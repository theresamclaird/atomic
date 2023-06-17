import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../Box';

function Pip({ symbol, sx, ...props }) {
  return (
    <Flex
      justify="center"
      align="center"
      gap={0}
      sx={{
        m: 0,
        p: 0,
        fontSize: '2rem',
        ...sx,
      }}
      {...props}
    >
      {symbol}
    </Flex>
  );
}

Pip.defaultProps = {
  sx: {},
};

Pip.propTypes = {
  symbol: PropTypes.string.isRequired,
  sx: PropTypes.objectOf(PropTypes.any),
};

export { Pip, Pip as default };
