import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function {{componentName}}({ sx, ...props }) {
  return (<Box sx=\{{ ...sx}} {...props} />);
}

{{componentName}}.defaultProps = {
  sx: {},
};

{{componentName}}.propTypes = {
  sx: PropTypes.objectOf(PropTypes.any),
};

export { {{componentName}}, {{componentName}} as default };
