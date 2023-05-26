import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Box } from '../Box';

function Image({
  alt, src, sources, aspectRatio, sx, ...props
}) {
  if (aspectRatio !== 0) {
    return (
      <Box
        sx={{
          position: 'relative',
          display: 'block',
          ':before': {
            content: "''",
            display: 'block',
            width: '100%',
            paddingBottom: `${100 / aspectRatio}%`,
          },
        }}
      >
        <Box as="picture">
          {sources.map(({ media, srcset }) => (
            <Fragment key={nanoid()}>
              <Box as="source" media={media} srcSet={srcset} />
            </Fragment>
          ))}
          <Box
            as="img"
            alt={alt}
            src={src}
            sx={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', ...sx,
            }}
            {...props}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Box as="picture">
      {sources.map(({ media, srcset }) => (
        <Fragment key={nanoid()}>
          <Box as="source" media={media} srcSet={srcset} />
        </Fragment>
      ))}
      <Box
        as="img"
        alt={alt}
        src={src}
        sx={{
          width: '100%', height: '100%', ...sx,
        }}
        {...props}
      />
    </Box>
  );
}

Image.defaultProps = {
  sources: [],
  aspectRatio: 0,
  sx: {},
};

const ImageSourcePropType = PropTypes.shape({
  srcset: PropTypes.string,
  media: PropTypes.string,
});
Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  sources: PropTypes.arrayOf(ImageSourcePropType),
  aspectRatio: PropTypes.number,
  sx: PropTypes.objectOf(PropTypes.any),
};

export { Image, Image as default, ImageSourcePropType };
