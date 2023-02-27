import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '../Box';
import { Text } from '../Text';

const Accordion = ({ label, expandIcon, collapseIcon, children, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box {...props}>
      <Flex
        onClick={() => setIsExpanded(!isExpanded)}
        sx={{
          ':hover': { cursor: 'pointer' },
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '1rem',
          p: '1rem',
        }}
      >
        <Text>{label}</Text>
        <Text>{isExpanded ? collapseIcon : expandIcon}</Text>
      </Flex>
      <Box
        sx={{
          p: '1rem',
          display: isExpanded ? 'block' : 'none',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

Accordion.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  expandIcon: PropTypes.string.isRequired,
  collapseIcon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Accordion, Accordion as default };