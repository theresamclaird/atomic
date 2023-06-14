import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import {
  Text, Box, Flex, Image, Button,
} from '..';

const buttonCss = {
  backgroundColor: 'transparent',
  border: 'none',
  color: '#562cac',
  cursor: 'pointer',
  fontSize: '2rem',
  fontWeight: 900,
  padding: 0,
};

const nextPrevButtonCss = {
  ...buttonCss,
  position: 'absolute',
  top: 0,
  bottom: 0,
  backgroundColor: 'rgba(255,255,255,0.2)',
  borderRadius: 0,
  padding: '2rem',
};

const buttonTextCss = {
  fontSize: '2rem',
  fontWeight: 900,
  color: 'white',
};

function Carousel({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <Flex direction="column" justify="center" align="center">
      <Box sx={{ position: 'relative' }}>
        <Image
          {...images[imageIndex]}
          onMouseEnter={() => setShowNavigation(true)}
          onMouseOut={() => setShowNavigation(false)}
        />
        <Button
          variant="unstyled"
          sx={{
            ...nextPrevButtonCss,
            visibility: showNavigation ? 'visible' : 'hidden',
            left: 0,
          }}
          onMouseEnter={() => setShowNavigation(true)}
          onMouseOut={() => setShowNavigation(false)}
          label={<Text sx={buttonTextCss}>&lt;</Text>}
          onClick={() => {
            const newIndex = imageIndex - 1;
            setImageIndex(newIndex < 0 ? images.length - 1 : newIndex);
          }}
        />
        <Button
          variant="unstyled"
          sx={{
            ...nextPrevButtonCss,
            visibility: showNavigation ? 'visible' : 'hidden',
            right: 0,
          }}
          onMouseEnter={() => setShowNavigation(true)}
          onMouseOut={() => setShowNavigation(false)}
          label={<Text sx={buttonTextCss}>&gt;</Text>}
          onClick={() => {
            setImageIndex((imageIndex + 1) % images.length);
          }}
        />
      </Box>
      <Flex direction="row" justify="center" align="center" gap={1} sx={{ mb: 1 }}>
        {images.map((image, index) => {
          if (index === imageIndex) {
            return (<Button variant="unstyled" key={nanoid()} label="●" disabled sx={buttonCss} />);
          }
          return (<Button variant="unstyled" key={nanoid()} label="○" sx={buttonCss} onClick={() => setImageIndex(index)} />);
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
