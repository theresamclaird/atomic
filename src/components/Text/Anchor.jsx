import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './Text';

function Anchor({ as, href, children, ...props }) {
  return (
    <Text as={as} href={href} {...props}>
      {children}
    </Text>
  );
}

Anchor.defaultProps = {
  as: 'a',
};

Anchor.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export { Anchor, Anchor as default };
