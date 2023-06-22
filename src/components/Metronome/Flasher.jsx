import React from 'react';
import PropTypes from 'prop-types';
// import { keyframes } from '@emotion/react';
import { Flex } from '../Box';
import { Text } from '../Text';

function Flasher({ beatCount, label, sx, ...props }) {
  //   const flash = keyframes`
  //   0% { backgroundColor: '#fff'; }
  //   50% { backgroundColor: '#f00; }
  //   100% { backgroundColor: '#fff'; }
  // `;

  return (
    <Flex direction="column" justify="space-between" align="center" sx={{ p: 1 }}>
      <Text>{label}</Text>
      <Flex
        justify="center"
        align="center"
        sx={{
          size: 100,
          border: 'solid 1px #000',
          backgroundColor: '#fff',
          // animation: `${flash} 0.2s linear infinite`,
          ...sx,
        }}
        {...props}
      >
        {beatCount}
      </Flex>
    </Flex>
  );
}

Flasher.defaultProps = {
  sx: {},
  label: '',
};

Flasher.propTypes = {
  sx: PropTypes.objectOf(PropTypes.any),
  beatCount: PropTypes.number.isRequired,
  label: PropTypes.string,
};

export { Flasher, Flasher as default };
