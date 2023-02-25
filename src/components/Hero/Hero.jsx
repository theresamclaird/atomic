import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Image } from '../Image';

const Hero = ({ alt, src, sx, children, ...props }) => (
  <Box
    sx={{
      backgroundColor: 'white',
      maxWidth: '50%',
      minWidth: '300px',
      m: '6rem',
      p: 0,
      ...sx,
    }}
    {...props}
  >
    <Image
      alt={alt}
      src={src}
      sx={{ maxWidth: '100%' }}
    />
    {children && <Box sx={{ p: '2rem' }}>{children}</Box>}
  </Box>
);

Hero.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export { Hero, Hero as default };
