import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import {
  Box, Flex, Image, Button,
} from '..';

const buttonCss = {
  fontSize: '2rem',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
};

const nextPrevButtonCss = {
  ...buttonCss,
  position: 'absolute',
  top: 0,
  bottom: 0,
  backgroundColor: 'rgba(255,255,255,0.2)',
  borderRadius: 0,
  color: 'white',
  padding: '2rem',
};

function Carousel({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);

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
        <Image
          {...images[imageIndex]}
          onMouseEnter={() => setShowNavigation(true)}
          onMouseOut={() => setShowNavigation(false)}
        />
        <Button
          sx={{
            ...nextPrevButtonCss,
            visibility: showNavigation ? 'visible' : 'hidden',
            left: 0,
          }}
          onMouseEnter={() => setShowNavigation(true)}
          onMouseOut={() => setShowNavigation(false)}
          label="<"
          onClick={() => decrementImageIndex()}
        />
        <Button
          sx={{
            ...nextPrevButtonCss,
            visibility: showNavigation ? 'visible' : 'hidden',
            right: 0,
          }}
          onMouseEnter={() => setShowNavigation(true)}
          onMouseOut={() => setShowNavigation(false)}
          label=">"
          onClick={() => incrementImageIndex()}
        />
      </Box>
      <Flex direction="row" justify="center" align="center" gap={1} sx={{ mb: 1 }}>
        {images.map((image, index) => {
          if (index === imageIndex) {
            return (<Button key={nanoid()} label="●" disabled sx={buttonCss} />);
          }

          return (<Button key={nanoid()} label="○" sx={buttonCss} onClick={() => setImageIndex(index)} />);
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
