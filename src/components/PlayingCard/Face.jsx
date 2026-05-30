/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '../Box';
import Pip from './Pip';

function Face({ suit, color, image, label, pip }) {
  // Court-image height — the single knob for face-card art size. In `em`, which
  // tracks the card width (PlayingCard sets font-size: 10cqw, so 10em == card
  // width). Tune this one value to make the portrait larger/smaller.
  const imageHeight = '10.5em';

  // Pip inset from the image's own corners (the pips are positioned relative to
  // the image box, so they always land on the art regardless of card size).
  const top = '0.45em';
  const bottom = '0.45em';
  const left = '0.45em';
  const right = '0.45em';

  const topPipStyle = {
    J: {
      hearts: { top, right },
      spades: { top, left },
      diamonds: { top, right },
      clubs: { top, right },
    },
    Q: {
      hearts: { top, left },
      spades: { top, right },
      diamonds: { top, right },
      clubs: { top, right },
    },
    K: {
      hearts: { top, left },
      spades: { top, left },
      diamonds: { top, left },
      clubs: { top, left },
    },
  }[label][suit];

  const bottomPipStyle = {
    J: {
      hearts: { bottom, left },
      spades: { bottom, right },
      diamonds: { bottom, left },
      clubs: { bottom, left },
    },
    Q: {
      hearts: { bottom, right },
      spades: { bottom, left },
      diamonds: { bottom, left },
      clubs: { bottom, left },
    },
    K: {
      hearts: { bottom, right },
      spades: { bottom, right },
      diamonds: { bottom, right },
      clubs: { bottom, right },
    },
  }[label][suit];

  return (
    <Flex
      sx={{
        gridRowStart: 1,
        gridRowEnd: 'span 16',
        gridColumnStart: 1,
        gridColumnEnd: 'span 6',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Wrapper shrinks to the image so the pips can be pinned to its corners. */}
      <Box sx={{ position: 'relative', height: imageHeight, lineHeight: 0 }}>
        <Box
          sx={{
            display: 'block',
            height: '100%',
            width: 'auto',
            border: 'solid 1px #00f',
            borderRadius: '0.15em',
          }}
          as="img"
          src={image}
          alt="card"
        />
        <Pip
          symbol={pip}
          sx={{
            fontSize: '1.5em',
            lineHeight: 1,
            position: 'absolute',
            color,
            ...topPipStyle,
          }}
        />
        <Pip
          symbol={pip}
          sx={{
            fontSize: '1.5em',
            lineHeight: 1,
            position: 'absolute',
            color,
            transform: 'rotate(180deg)',
            ...bottomPipStyle,
          }}
        />
      </Box>
    </Flex>
  );
}

Face.defaultProps = {
  image: null,
};

Face.propTypes = {
  suit: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.node,
  label: PropTypes.string.isRequired,
  pip: PropTypes.string.isRequired,
};

export default Face;
