import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function HamburgerMenu({ sx, children, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box onClick={() => setIsOpen(!isOpen)} sx={sx} {...props}>
        <Box sx={{ cursor: 'pointer', fontSize: '2rem' }}>☰</Box>
        <Box
          sx={{
            '@keyframes fadeIn': {
              '0%': { display: 'none', opacity: 0 },
              '100%': { display: 'flex', opacity: 1 },
            },
            animation: 'fadeIn 0.333s ease 1',
            display: isOpen ? 'flex' : 'none',
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            zIndex: 2,
            flexDirection: 'column',
            backgroundColor: '#fff',
            m: 0,
            p: 0,
            borderRadius: '0.33rem',
            boxShadow: '0 0 15px #999',
            overflow: 'hidden',
            '& a': {
              m: 0,
              px: '0.666rem',
              py: '0.5rem',
              ':hover': { backgroundColor: '#eee' },
            },
          }}
          as="ul"
        >
          {children}
        </Box>
      </Box>
      <Box
        onClick={() => setIsOpen(false)}
        sx={{
          display: isOpen ? 'block' : 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: '1',
        }}
      />
    </>
  );
}

HamburgerMenu.defaultProps = {
  sx: {},
  children: null,
};

HamburgerMenu.propTypes = {
  sx: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
};

export { HamburgerMenu, HamburgerMenu as default };
