import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function HoverBox({ children, initialState }) {
  const [state, setState] = useState(initialState);

  return (
    <Box
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      {children(state)}
    </Box>
  );
}

HoverBox.defaultProps = {
  initialState: false,
};

HoverBox.propTypes = {
  children: PropTypes.func.isRequired,
  initialState: PropTypes.bool,
};

export { HoverBox, HoverBox as default };
