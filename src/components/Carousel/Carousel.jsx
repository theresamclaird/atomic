import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import {
  Box, Flex, Image, Button,
} from '..';

const buttonCss = {
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '3rem',
  fontWeight: 900,
  cursor: 'pointer',
  padding: 0,
};

const nextPrevButtonCss = {
  ...buttonCss,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: '#fff',
  borderRadius: '50%',
  opacity: 0.5,
  color: 'focus',
  size: '5rem',
  paddingBottom: '0.3rem',
};

function Carousel({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  const incrementImageIndex = () => {
    setImageIndex((imageIndex + 1) % images.length);
  };

  const decrementImageIndex = () => {
    const newIndex = imageIndex - 1;
    setImageIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <Box sx={{ position: 'relative' }}>
        <Image {...images[imageIndex]} />
        <Button
          sx={{
            ...nextPrevButtonCss,
            left: 1,
          }}
          label="&larr;"
          onClick={() => decrementImageIndex()}
        />
        <Button
          sx={{
            ...nextPrevButtonCss,
            right: 1,
          }}
          label="&rarr;"
          onClick={() => incrementImageIndex()}
        />
      </Box>
      <Flex direction="row" justify="center" align="center" gap={1} sx={{ mb: 1 }}>
        {images.map((image, index) => {
          if (index === imageIndex) {
            return (<Button label="●" disabled sx={buttonCss} />);
          }

          return (<Button label="○" sx={buttonCss} onClick={() => setImageIndex(index)} />);
        })}
      </Flex>
    </Flex>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    sources: PropTypes.arrayOf(PropTypes.shape({
      media: PropTypes.string,
      srcset: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

export { Carousel, Carousel as default };
