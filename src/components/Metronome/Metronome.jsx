import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Text } from '../Text';
import { useMetronome } from './useMetronome';

function Metronome({ beatsPerMinute, sx, ...props }) {
  const [state] = useMetronome(beatsPerMinute);
  const { beatDurationMs, startMs, currentMs, beatCount, drift, averageDrift } = state;

  return (
    <Box sx={{ ...sx }} {...props}>
      <Box as="ul">
        <Text as="li">{`Beats per Minute: ${beatsPerMinute}`}</Text>
        <Text as="li">{`Beat Duration (ms): ${beatDurationMs}`}</Text>
        <Text as="li">{`Start (ms): ${startMs}`}</Text>
        <Text as="li">{`Current (ms): ${currentMs}`}</Text>
        <Text as="li">{`Beat Count: ${beatCount}`}</Text>
        <Text as="li">{`Drift: ${drift}`}</Text>
        <Text as="li">{`Average Drift: ${averageDrift}`}</Text>
      </Box>
    </Box>
  );
}

Metronome.defaultProps = {
  beatsPerMinute: 60,
  sx: {},
};

Metronome.propTypes = {
  sx: PropTypes.objectOf(PropTypes.any),
  beatsPerMinute: PropTypes.number,
};

export { Metronome, Metronome as default };
