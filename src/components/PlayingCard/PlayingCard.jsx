import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '../Box';
import Pips from './Pips';
import Corner from './Corner';
import Face from './Face';

function PlayingCard({
  width,
  size,
  color,
  suit,
  face,
  label,
  pip,
  value,
  sx,
  ...props
}) {
  // The card scales as a single unit: the outer box sets the width (any CSS
  // length, including "100%"), aspect-ratio derives the height, and the inner
  // card's font-size tracks the card width via container query units — so every
  // interior dimension (declared in `em`) stays proportional at any size.
  //
  // `size` is preferred (e.g. "100%", "80px", 96 -> "96px"). The legacy numeric
  // `width` is kept: it used to be the grid width in rem, whose outer footprint
  // was ~width + 2rem, so we map it accordingly.
  let cardWidth;
  if (size != null) {
    cardWidth = typeof size === 'number' ? `${size}px` : size;
  } else {
    cardWidth = `${(width ?? 6) + 2}rem`;
  }
  const pipStyle = {
    1: {
      '& > :first-of-type': {
        gridRowStart: 5,
        gridRowEnd: 'span 8',
        gridColumnStart: 2,
        gridColumnEnd: 'span 4',
        fontSize: '4em',
      },
    },
    2: {
      '& > :first-of-type': {
        gridRowStart: 2,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 12,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
    },
    3: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
    },
    4: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
    },
    5: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnEnd: 'span 2',
        gridColumnStart: 1,
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnEnd: 'span 2',
        gridColumnStart: 5,
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(5)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
    },
    6: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(5)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(6)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
    },
    7: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(5)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(6)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(7)': {
        gridRowStart: 4,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
    },
    8: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(5)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(6)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(7)': {
        gridRowStart: 4,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(8)': {
        gridRowStart: 10,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
    },
    9: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 5,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 5,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(5)': {
        gridRowStart: 9,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(6)': {
        gridRowStart: 9,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(7)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(8)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(9)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
    },
    10: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 5,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 5,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(5)': {
        gridRowStart: 9,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(6)': {
        gridRowStart: 9,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(7)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(8)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(9)': {
        gridRowStart: 3,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(10)': {
        gridRowStart: 11,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
    },
  }[value];
  const applesauce = face ? {} : pipStyle; // todo fix this.
  return (
    <Box
      sx={{
        display: 'inline-block',
        width: cardWidth,
        aspectRatio: '5 / 7',
        containerType: 'inline-size',
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          position: 'relative',
          boxSizing: 'border-box',
          width: '100%',
          height: '100%',
          // 1em == 10% of the card's width, so all `em` sizes below scale with
          // the card. This is the single knob that makes the card resolution-
          // independent and keeps the pips from ever overlapping.
          fontSize: '10cqw',
          backgroundColor: 'white',
          borderStyle: 'solid',
          borderWidth: 'max(1px, 0.05em)',
          borderColor: 'black',
          borderRadius: '0.4em',
          boxShadow: '0 0 0.15em #666',
          p: '0.55em',
        }}
      >
        <Grid
          columns="repeat(6, 1fr)"
          rows="repeat(16, 1fr)"
          sx={{
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            p: '0.4em',
            ...applesauce,
          }}
        >
          {face ? (
            <Face
              color={color}
              suit={suit}
              image={face}
              label={label}
              pip={pip}
            />
          ) : (
            <Pips count={value} pip={pip} color={color} />
          )}
          <Corner
            label={label}
            pip={pip}
            sx={{ top: '0.2em', left: '0.2em', color }}
          />
          <Corner
            label={label}
            pip={pip}
            sx={{
              bottom: '0.2em',
              right: '0.2em',
              transform: 'rotate(180deg)',
              color,
            }}
          />
        </Grid>
      </Box>
    </Box>
  );
}

PlayingCard.defaultProps = {
  width: 6,
  size: null,
  face: null,
  sx: {},
};

PlayingCard.propTypes = {
  color: PropTypes.string.isRequired,
  suit: PropTypes.oneOf(['spades', 'hearts', 'clubs', 'diamonds']).isRequired,
  face: PropTypes.node,
  label: PropTypes.string.isRequired,
  pip: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  /** Card width — any CSS length ("100%", "80px") or a number (px). Preferred. */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Legacy: grid width in rem (outer footprint ≈ width + 2rem). */
  width: PropTypes.number,
  sx: PropTypes.objectOf(PropTypes.any),
};

export { PlayingCard, PlayingCard as default };
