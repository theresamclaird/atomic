import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Text } from '../Text';

function Report({
  beatsPerMinute,
  startMs,
  beatDurationMs,
  beatCount,
  drift,
  averageDrift,
  sx,
  ...props
}) {
  return (
    <Box sx={{ ...sx }} {...props}>
      <Box as="ul">
        <Text as="li">{`Beats per Minute: ${beatsPerMinute}`}</Text>
        <Text as="li">{`Beat Duration (ms): ${beatDurationMs}`}</Text>
        <Text as="li">{`Start (ms): ${startMs}`}</Text>
        <Text as="li">{`Beat Count: ${beatCount}`}</Text>
        <Text as="li">{`Drift: ${drift}`}</Text>
        <Text as="li">{`Average Drift: ${Math.round(averageDrift)}`}</Text>
      </Box>
    </Box>
  );
}

Report.defaultProps = {
  sx: {},
};

Report.propTypes = {
  sx: PropTypes.objectOf(PropTypes.any),
  beatsPerMinute: PropTypes.number.isRequired,
  startMs: PropTypes.number.isRequired,
  beatDurationMs: PropTypes.number.isRequired,
  beatCount: PropTypes.number.isRequired,
  drift: PropTypes.number.isRequired,
  averageDrift: PropTypes.number.isRequired,
};

export { Report, Report as default };
