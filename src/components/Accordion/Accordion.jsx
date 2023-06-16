import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';

function Accordion({
  expanded, label, expandSymbol, collapseSymbol, children, ...props
}) {
  return (
    <Box {...props}>
      <Flex
        sx={{
          ':hover': { cursor: 'pointer' },
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 'small',
          pb: 'small',
        }}
      >
        <Button variant="unstyled" label={label} />
        <Text>{expanded ? collapseSymbol : expandSymbol}</Text>
      </Flex>
      <Box
        sx={{
          pb: 'small',
          '@keyframes slideOpen': {
            '0%': { display: 'none', opacity: 0 },
            '100%': { display: 'block', opacity: 1 },
          },
          animation: 'slideOpen 0.333s ease 1',
          display: expanded ? 'block' : 'none',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

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
