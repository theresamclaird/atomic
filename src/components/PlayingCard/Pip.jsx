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
        // `em` so pips scale with the card (set by PlayingCard's font-size).
        fontSize: '2.2em',
        lineHeight: 1,
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
