import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '../Box';
import { Text } from '../Text';

const Accordion = ({ expanded, label, expandSymbol, collapseSymbol, children, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <Box {...props}>
      <Flex
        onClick={() => setIsExpanded(!isExpanded)}
        sx={{
          ':hover': { cursor: 'pointer' },
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 'small',
          p: 'small',
        }}
      >
        {label}
        <Text>{isExpanded ? collapseSymbol : expandSymbol}</Text>
      </Flex>
      <Box
        sx={{
          p: 'small',
          display: isExpanded ? 'block' : 'none',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

Accordion.defaultProps = {
  expanded: false,
  expandSymbol: '+',
  collapseSymbol: '-',
};

Accordion.propTypes = {
  expanded: PropTypes.bool,
  label: PropTypes.node.isRequired,
  expandSymbol: PropTypes.string,
  collapseSymbol: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { Accordion, Accordion as default };