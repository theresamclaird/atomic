import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Image } from '../Image';

function Hero({
  alt, src, sx, children, ...props
}) {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        m: 0,
        p: 0,
        ...sx,
      }}
      {...props}
    >
      <Image alt={alt} src={src} sx={{ width: '100%', objectFit: 'contain' }} />
      {children && <Box sx={{ p: ['small', 'medium'] }}>{children}</Box>}
    </Box>
  );
}

Hero.defaultProps = {
  sx: {},
};

Hero.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  sx: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export { Hero, Hero as default };
