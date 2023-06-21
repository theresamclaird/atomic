import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Text } from '../Text';

function Metronome({ beatsPerMinute, trigger, sx, ...props }) {
  const [state, setState] = useState({
    startMs: new Date().getTime(),
    currentMs: null,
    beatDurationMs: 60000 / beatsPerMinute,
    beatCount: 0,
    drift: 0,
  });

  useEffect(() => {
    const { startMs, beatDurationMs } = state;
    const currentMs = new Date().getTime();
    const beatCount = (currentMs - startMs) / beatDurationMs;
    const drift = beatCount - Math.floor(beatCount);

    setState({
      ...state,
      currentMs,
      beatCount: Math.floor(beatCount),
      drift,
    });

    const timeout = setTimeout(() => {
      trigger();
    }, beatDurationMs - drift);

    return () => {
      clearTimeout(timeout);
    };
  }, [beatsPerMinute, trigger, state]);

  const { startMs, currentMs, beatDurationMs, beatCount, drift } = state;

  return (
    <Box sx={{ ...sx }} {...props}>
      <Box as="ul">
        <Text as="li">{`Beats per Minute: ${beatsPerMinute}`}</Text>
        <Text as="li">{`Beat Duration (ms): ${beatDurationMs}`}</Text>
        <Text as="li">{`Start (ms): ${startMs}`}</Text>
        <Text as="li">{`Current (ms): ${currentMs}`}</Text>
        <Text as="li">{`Beat Count: ${beatCount}`}</Text>
        <Text as="li">{`Drift: ${drift}`}</Text>
      </Box>
    </Box>
  );
}

Metronome.defaultProps = {
  beatsPerMinute: 60,
  trigger: () => {
    console.log('trigger');
  },
  sx: {},
};

Metronome.propTypes = {
  sx: PropTypes.objectOf(PropTypes.any),
  beatsPerMinute: PropTypes.number,
  trigger: PropTypes.func,
};

export { Metronome, Metronome as default };
