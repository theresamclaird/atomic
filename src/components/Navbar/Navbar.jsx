import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../Box';

function Navbar({ as, sx, children, ...props }) {
  return (
    <Flex
      as={as}
      sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        m: 0,
        p: '0.5rem',
        backgroundColor: '#fff',
        boxShadow: '0 0 5px #666',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Flex>
  );
}

Navbar.defaultProps = {
  as: 'header',
  sx: {},
  children: null,
};

Navbar.propTypes = {
  as: PropTypes.string,
  sx: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
};

export { Navbar, Navbar as default };
