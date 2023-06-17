import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Image, ImageSourcePropType } from '../Image';

function Hero({ alt, src, sources, aspectRatio, sx, children, ...props }) {
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
      <Image
        alt={alt}
        src={src}
        sources={sources}
        aspectRatio={aspectRatio}
        sx={{ objectFit: 'contain' }}
      />
      {children && <Box sx={{ p: ['small', 'medium'] }}>{children}</Box>}
    </Box>
  );
}

Hero.defaultProps = {
  sources: [],
  sx: {},
};

Hero.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  sources: PropTypes.arrayOf(ImageSourcePropType),
  aspectRatio: PropTypes.number.isRequired,
  sx: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export { Hero, Hero as default };
